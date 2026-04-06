"use client";

import React from "react";
import Sidebar from "../components/sidebar";
import { useUser } from "@/src/context/usercontext";

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Sidebar (fixed width, full height) */}
      <div className="w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
        <Sidebar />
      </div>

      {/* Main content (scrollable area) */}
      <div className="flex-1 overflow-y-auto p-6">{children}</div>
    </div>
  );
}
