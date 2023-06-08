import ButtonComponent from "@/components/common/atoms/button/button.component";
import CardComponent from "@/components/common/atoms/card/card.component";
import InputComponent from "@/components/common/atoms/input/input.component";
import TypographyComponent from "@/components/common/atoms/typography/typography.component";

export default function Home() {
  return (
    <>
      <ButtonComponent variant="secondary">جدیدی</ButtonComponent>
      <TypographyComponent as="h1">
        این یه متن من در آوردی هست
      </TypographyComponent>
      <CardComponent>
        <TypographyComponent>متن جدید</TypographyComponent>
      </CardComponent>
      <br />
      <br />
      <CardComponent>
        <InputComponent />
      </CardComponent>
    </>
  );
}
