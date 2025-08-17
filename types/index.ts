// types/index.ts
import { ReactNode } from "react";

// export interface TimelineElement {
//   date: Date;
//   title: string;
//   description: string;
//   icon?: ReactNode | (() => ReactNode);
//   color?: "primary" | "secondary" | "muted" | "accent";
// }
export interface TimelineElement {
  date: string | Date; // allow both
  title: string;
  description: string;
  icon?: React.ReactNode | (() => React.ReactNode);
  color?: "primary" | "secondary" | "muted" | "accent";
}
