"use server";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function login(email: string, password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { status: "error", message: error.message };
  }

  if (!data.session) {
    return { status: "error", message: "No session returned. Login failed." };
  }

  return { status: "success", user: data.user };
}

export const updateProfileData = async (
  userId: string,
  profileImageUrl: string | null,
  resumeUrl: string | null
) => {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("profiles")
      .update({ profile_picture_url: profileImageUrl, resume_url: resumeUrl })
      .eq("id", userId);
    if (error) {
      return { status: "error", message: error.message };
    }
    return { status: "success", data };
  } catch (error) {
    console.log("Failed to update profile data", error);
  }
};

export const logout = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return { status: "error", message: error.message };
  }
  redirect("/");
};

export const getUserProfile = async () => {
  try {
    const supabase = await createClient();

    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("*");
    if (error) {
      return {
        status: "error",
        message: error.message,
      };
    }
    return { status: "success", profiles };
  } catch (error) {
    console.log("Failed to get user profile", error);
  }
};
