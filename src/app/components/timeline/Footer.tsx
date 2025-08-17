import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="w-full py-6 px-5">
      <div className="flex justify-center mb-4">
        <Link href="#top" className="flex items-center">
          <Image
            src={theme === "light" ? "/HeaderIcon.png" : "/IconLight.png"}
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>
      </div>

      <div className="w-full border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Koshish Khadka. All rights reserved.
        <p className="text-center text-sm md:text-sm">
          About this website: built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email,
          Vercel, MySQL,
        </p>
      </div>
    </footer>
  );
};

export default Footer;
