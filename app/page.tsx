import ButtonComponent from "@/components/common/atoms/button/button.component";
import CardComponent from "@/components/common/atoms/card/card.component";
import TypographyComponent from "@/components/common/atoms/typography/typography.component";

export default function Home() {
  return (
    <>
      <h1>NEXT JS</h1>
      <ButtonComponent variant="secondary">جدیدی</ButtonComponent>
      <TypographyComponent as="h1">این یه متت من در آوردی هست</TypographyComponent>
      <CardComponent>
        <TypographyComponent>متن جدید</TypographyComponent>
      </CardComponent>
    </>
  );
}
