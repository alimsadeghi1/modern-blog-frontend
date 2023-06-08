"use client";

import { IHelperText } from "./helper-text.type";
import { InputStyle as S } from "./helper-text.style";

export default function HelperTextComponent({
  status,
  ...restProps
}: IHelperText) {
  return (
    <S.HelperText {...restProps} status={status} as="span" />
  );
}
