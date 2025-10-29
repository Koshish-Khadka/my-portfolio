"use client";

import { AddProject } from "@/src/actions/project";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { createClient } from "@/src/utils/supabase/client";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Projects = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null as File | null,
    github: "",
    preview: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const target = e.target as HTMLInputElement;
      const file = target.files ? target.files[0] : null;
      setFormData({ ...formData, image: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    // console.log("Project data:", formData);
    try {
      // upload image to supabase bucket
      const fileName = `Image_${Date.now()}`;
      const supabase = createClient();
      if (formData.image) {
        const { error } = await supabase.storage
          .from("project-assets")
          .upload(fileName, formData.image);
        if (error) {
          console.error("Error uploading image:", error);
          alert("❌ Error uploading image: " + error.message);
          return;
        }
      }
      const {
        data: { publicUrl },
      } = supabase.storage.from("project-assets").getPublicUrl(fileName);

      const result = await AddProject(
        formData.title,
        formData.description,
        publicUrl,
        formData.github,
        formData.preview
      );

      if (result.status === "success") {
        alert("✅ Project added successfully!");
        setFormData({
          title: "",
          description: "",
          image: null,
          github: "",
          preview: "",
        });
      } else {
        alert("❌ Error adding project: " + result.message);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 dark:bg-neutral-900 transition-colors duration-300 px-4 sm:px-8 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">
          Add New Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Title
            </label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              required
              className="w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Description
            </label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Brief description about the project"
              required
              rows={5}
              className="w-full"
            />
          </div>

          {/* Image File Upload */}
          <div className="grid w-full max-w-sm items-center gap-3">
            <label
              htmlFor="picture"
              className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200"
            >
              Project Image
            </label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
            />
            {formData.image && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Selected: {(formData.image as File).name}
              </p>
            )}
          </div>

          {/* GitHub Link */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              GitHub Link
            </label>
            <Input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/username/repo"
              className="w-full"
            />
          </div>

          {/* Preview Link */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Live Preview Link
            </label>
            <Input
              type="url"
              name="preview"
              value={formData.preview}
              onChange={handleChange}
              placeholder="https://yourproject.com"
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            {loading ? (
              <Button
      
                className="px-8 py-2"
              >
                <TailSpin
                  visible={true}
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </Button>
            ) : (
              <Button
                type="submit"
                className="px-8 py-2 text-sm font-semibold bg-green-600 text-white dark:bg-green-500 dark:text-black hover:opacity-90 transition-all duration-300"
              >
                Add Project
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Projects;
