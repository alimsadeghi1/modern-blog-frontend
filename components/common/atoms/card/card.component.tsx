'use client';

import { CardStyle as S } from "./card.style";
import { ICard } from "./card.type";

export default function CardComponent({ ...restProps }: ICard) {
  return <S.Card {...restProps} />;
}
