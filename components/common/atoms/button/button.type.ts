import { ButtonHTMLAttributes } from "react";

export type ButtonVariantType = "primary" | "secondary";
export type ButtonRoundType = "full";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  round?: ButtonRoundType;
}
