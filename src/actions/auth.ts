"use server";
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
