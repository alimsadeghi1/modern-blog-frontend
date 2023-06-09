import styled from "@emotion/styled";
import { ITypography } from "./typography.type";

const Typography = styled(
  ({ as: Element = "p", ...restProps }: ITypography) => (
    <Element {...restProps} />
  )
)`
  color: ${({ theme }) => theme.colors.text[500]};
`;

export const TypographyStyle = {
  Typography,
};
