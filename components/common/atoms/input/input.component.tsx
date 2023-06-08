"use client";

import { IInput } from "./input.type";
import { InputStyle as S } from "./inputs.style";

export default function InputComponent({
  status,
  helperText,
  ...restProps
}: IInput) {
  return (
      <S.Input status={status} {...restProps} />
  );
}
