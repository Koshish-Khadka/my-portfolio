"use server";

import { createClient } from "../utils/supabase/server";

export const AddProject = async (
  title: string,
  description: string,
  image: string,
  github: string,
  preview: string,
) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("projects")
      .insert({
        title,
        description,
        image_url: image,
        github_url: github,
        preview_url: preview,
      })
      .select();

    if (error) {
      return { status: "error", message: error.message };
    }

    return { status: "success", project: data };
  } catch (error) {
    console.error("Error adding project:", error);
    return { status: "error", message: "Unexpected error occurred" };
  }
};

export const getAllProjects = async () => {
  try {
    const supabase = await createClient();

    const { data: projects, error } = await supabase
      .from("projects")
      .select("*");
    if (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
    return {
      status: "success",
      projects: projects,
    };
  } catch (error) {
    console.log("Error getting project", error);
  }
};

export const deleteProjectById = async (projectID: string) => {
  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectID);
    if (error) {
      return { status: "error", message: error.message };
    }
    return { status: "success" };
  } catch (error) {
    console.log("error", error);
  }
};

export const getProjectById = async (projectId: string) => {
  try {
    const supabase = await createClient();
    const { data: project, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", projectId)
      .single();
    if (error) {
      return { status: "error", message: error.message };
    }
    return { status: "success", data: project };
  } catch (error) {
    console.log("Failed to get product", error);
  }
};

export const updateProjectById = async () => {};
