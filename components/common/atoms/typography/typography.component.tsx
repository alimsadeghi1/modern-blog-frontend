"use client";

import { TypographyStyle as S } from "./typography.style";
import { ITypography } from "./typography.type";

export default function TypographyComponent({
  as = "p",
  ...restProps
}: ITypography) {
  return <S.Typography as={as} {...restProps} />;
}
