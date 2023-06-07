import styled from "@emotion/styled";
import { ICard } from "./card.type";

const Card = styled("div")<ICard>`
  background-color: ${({ theme }) => theme.colors.surface[50]};
  border: 1px solid ${({ theme }) => theme.colors.border[500]};
  padding: 1rem;
  border-radius: 0.625rem;
  max-width: 100%;
`;

export const CardStyle = {
  Card,
};
