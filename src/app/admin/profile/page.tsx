"use client";
import { updateProfileData } from "@/src/actions/auth";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { useUser } from "@/src/context/usercontext";
import { createClient } from "@/src/utils/supabase/client";
import Image from "next/image";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Profile = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { user } = useUser();
  // Handle profile image change
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // for preview
    }
  };

  // Handle resume change
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setResume(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const supabase = createClient();

      // Start with existing URLs
      let profileImageUrl = user?.profile_picture_url || null;
      let resumeUrl = user?.resume_url || null;

      // Upload new profile image if present
      if (profileImage) {
        const profileFileName = `profile_${Date.now()}_${profileImage.name}`;
        const { data, error } = await supabase.storage
          .from("profile-assets")
          .upload(profileFileName, profileImage);
        if (error) throw error;

        profileImageUrl = supabase.storage
          .from("profile-assets")
          .getPublicUrl(data.path).data.publicUrl;
      }

      // Upload new resume if present
      if (resume) {
        const resumeFileName = `resume_${Date.now()}_${resume.name}`;
        const { data, error } = await supabase.storage
          .from("profile-assets")
          .upload(resumeFileName, resume);
        if (error) throw error;

        resumeUrl = supabase.storage
          .from("profile-assets")
          .getPublicUrl(data.path).data.publicUrl;
      }

      if (!user?.id) return "User not found";
      // Now update the DB with strings, not Files
      await updateProfileData(user.id, profileImageUrl, resumeUrl);

      alert("✅ Profile updated successfully!");
      setProfileImage(null);
      setResume(null);
    } catch (error) {
      console.error(error);
      alert("❌ Error updating profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl m-auto">
      <div className="flex flex-col justify-center items-center">
        <img
          src={
            previewUrl || user?.profile_picture_url || "/default-profile.png"
          }
          alt="profile"
          width={112}
          height={80}
          className="rounded-full mt-16 object-cover"
        />
        <h1 className="text-4xl py-8 font-bold">Koshish Khadka</h1>

        <div className="border p-4 rounded-md flex flex-col gap-y-8">
          {/* Profile Image Upload */}
          <div className="grid w-full max-w-sm items-center gap-3">
            <label
              htmlFor="profile"
              className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200"
            >
              Change Profile Image
            </label>
            <Input
              id="profile"
              type="file"
              accept="image/*"
              onChange={handleProfileChange}
            />
            {profileImage && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Selected: {profileImage.name}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="grid w-full max-w-sm items-center gap-3">
            <label
              htmlFor="resume"
              className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200"
            >
              Upload Resume
            </label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
            />
            {resume && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Selected: {resume.name}
              </p>
            )}
          </div>
          {loading ? (
            <Button className="w-full max-w-sm mx-auto">
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
            <Button className="w-full max-w-sm mx-auto" onClick={handleSubmit}>
              Update Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
