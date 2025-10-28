"use client";

import { Button } from "@/src/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Add Projects", href: "/admin/projects" },
  ];

  return (
    <div className="w-64 h-screen py-5 flex flex-col items-center border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <nav className="flex-1 mt-5 w-full flex flex-col items-center">
        <div className="text-center text-3xl font-bold pb-6 border-b border-gray-200 dark:border-gray-700 mb-6 text-gray-900 dark:text-gray-100">
          <h1>Admin Panel</h1>
        </div>

        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => router.push(item.href)}
              className={`
                w-56 h-10 mb-4 flex justify-center items-center font-medium border rounded-lg shadow-sm
                transition-all duration-200 
                ${
                  isActive
                    ? "bg-green-600 text-white dark:bg-green-500 dark:text-black"
                    : "bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100"
                }
                hover:bg-green-500 hover:text-white dark:hover:bg-green-400 dark:hover:text-black
              `}
            >
              {item.name}
            </Button>
          );
        })}
      </nav>
      <div className="flex justify-center pb-6">
        <Button
          // onClick={handleLogout}
          className="w-56 h-10 bg-red-600 text-white dark:bg-red-500 dark:text-black hover:bg-red-500 dark:hover:bg-red-400 transition-all duration-200 shadow-md"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
