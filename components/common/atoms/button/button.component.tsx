"use client";

import { ButtonStyle as S } from "./button.style";
import { IButton } from "./button.type";

export default function ButtonComponent(props: IButton) {
  return <S.Button {...props} />;
}
