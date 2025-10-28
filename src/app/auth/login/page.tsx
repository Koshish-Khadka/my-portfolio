"use client";
import { login } from "@/src/actions/auth";
import { useUser } from "@/src/context/usercontext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState({ email: "", password: "" });
  const { fetchUser } = useUser();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(input.email, input.password);
    if (result.status === "error") {
      alert(result.message);
    } else {
      router.push("/admin");
      fetchUser();
      alert(`hi ${result.user?.email}, you have successfully logged in!`);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="w-full max-w-sm px-6 py-12 bg-white dark:bg-neutral-800 rounded-2xl shadow-md transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-5xl font-black text-gray-900 dark:text-gray-100">
            Admin
          </h1>
        </div>

        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleLogin}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-900 dark:text-gray-200"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent py-1.5 px-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-900 dark:text-gray-200"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent py-1.5 px-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-colors duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-black dark:bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm hover:opacity-90 transition-colors duration-300"
          >
            Sign in
          </button>
          <Link href="/">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-700 dark:bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm hover:opacity-90 transition-colors duration-300"
            >
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
