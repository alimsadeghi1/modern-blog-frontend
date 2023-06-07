import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IButton } from "./button.type";
import { Theme } from "@emotion/react";

const base = css`
  border: none;
  cursor: pointer;
  padding: 0.439rem 1rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.1rem;
`;

const roundValues = {
  full: "1000rem",
};

const disabledMode = css`
  opacity: 0.5;
  cursor: default;
`;

const primary = (theme: Theme) => css`
  background: ${theme.colors.linearGradients.primary};
  color: ${theme.colors.base.white};
`;

const secondary = (theme: Theme) => css`
  background: transparent;
  color: ${theme.colors.secondary[100]};
  border: 1px solid ${theme.colors.secondary[50]};
`;

const colorValues = {
  primary,
  secondary,
};

const Button = styled("button")<IButton>`
  ${base};
  ${({ variant, theme }) => colorValues[variant || "primary"](theme)};
  border-radius: ${({ round }) => roundValues[round || "full"]};
  ${({ disabled }) => (disabled ? disabledMode : null)};
`;

export const ButtonStyle = {
  Button,
};
