// "use client";
// import { useTheme } from "next-themes";
// import React from "react";

// interface ThemeWrapperProps {
//   children: React.ReactNode;
// }

// export default function ThemeWrapper({ children }: ThemeWrapperProps) {
//   const { theme } = useTheme();

//   return (
//     <div
//       className={
//         theme === "light"
//           ? "absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
//           : "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
//       }
//     >
//       {children}
//     </div>

//   );
// }

"use client";

import React from "react";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

/**
 * ThemeWrapper handles the global background gradient.
 * It uses Tailwind's dark: modifier so no hydration mismatch can occur.
 */
export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return (
    <div
      className="absolute top-0 z-[-2] h-screen w-screen 
                 bg-white dark:bg-neutral-950
                 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      {children}
    </div>
  );
}
