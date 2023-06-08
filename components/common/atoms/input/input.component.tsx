"use client";

import { IInput } from "./input.type";
import { InputStyle as S } from "./inputs.style";

export default function InputComponent({
  status,
  helperText,
  ...restProps
}: IInput) {
  return (
    <S.Container>
      <S.Input status={status} {...restProps} />
      {helperText && (
        <S.HelperText status={status} as="span">
          {helperText}
        </S.HelperText>
      )}
    </S.Container>
  );
}
