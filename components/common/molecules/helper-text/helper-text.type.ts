import { HTMLAttributes } from "react";

export interface IHelperText extends HTMLAttributes<HTMLHeadingElement> {
  status?: "default" | "error" | "success";
}
