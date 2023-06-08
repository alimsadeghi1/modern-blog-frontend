import styled from "@emotion/styled";
import { IInput } from "./input.type";
import { Theme, css } from "@emotion/react";

const statusInputValues = {
  error: (theme: Theme, disabled: boolean) => css`
    border-color: ${theme.colors.error[disabled ? 100 : 500]};
    color: ${theme.colors.error[disabled ? 100 : 500]};
  `,
  success: (theme: Theme, disabled: boolean) => css`
    border-color: ${theme.colors.success[disabled ? 100 : 500]};
    color: ${theme.colors.success[disabled ? 100 : 500]};
  `,
  default: (theme: Theme, disabled: boolean) => css`
    border-color: ${theme.colors.border[disabled ? 200 : 400]};
    color: ${theme.colors.text[disabled ? 100 : 500]};
  `,
};

const Input = styled("input")<IInput>`
  border: 1px solid;
  border-radius: 1000rem;
  font-family: inherit;
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  ${({ status, theme, disabled }) =>
    statusInputValues[status || "default"](theme, disabled || false)};

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : null};
`;

export const InputStyle = {
  Input,
};
