"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createClient } from "../utils/supabase/client";

type User = {
  id: string;
  full_name: string;
  profile_picture_url: string;
  resume_url: string;
};

type userContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fetchUser: () => Promise<void>;
  isloading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const userContext = createContext<userContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);

  // console.log("The data of user is", user);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();
      if (authError || !user) return;
      const { data: Profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setUser(Profile);
    } catch (error) {
      console.log("Fetch user error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <userContext.Provider
      value={{ user, setUser, setIsLoading, fetchUser, isloading }}
    >
      {children}
    </userContext.Provider>
  );
};

export function useUser() {
  const context = useContext(userContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
}
