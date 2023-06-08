import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";
import TypographyComponent from "../../atoms/typography/typography.component";
import { IHelperText } from "./helper-text.type";

const statusHelperTextValues = {
  error: (theme: Theme) => css`
    color: ${theme.colors.error[500]};
  `,
  success: (theme: Theme) => css`
    color: ${theme.colors.success[500]};
  `,
  default: (theme: Theme) => css`
    color: ${theme.colors.text[300]};
  `,
};

const HelperText = styled(TypographyComponent)<IHelperText>`
  font-size: 0.875rem;
  font-weight: 300;
  ${({ status, theme }) => statusHelperTextValues[status || "default"](theme)};
`;

export const InputStyle = {
  HelperText,
};
