import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  status?: "default" | "error" | "success";
  fullWidth?: boolean;
  disabled?: boolean;
  helperText?: string;
}