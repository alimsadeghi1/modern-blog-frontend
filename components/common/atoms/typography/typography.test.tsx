import React from "react";
import { render } from "@testing-library/react";
import TypographyComponent from "./typography.component";
import AppProviderComponent from "@/components/providers/app/app-provider.component";
import "@testing-library/jest-dom";

describe("TypographyComponent", () => {
  it("renders with default props", () => {
    const { getByText } = render(
      <AppProviderComponent>
        <TypographyComponent>Hello, World!</TypographyComponent>
      </AppProviderComponent>
    );
    const element = getByText(/Hello, World!/i);
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toEqual("p");
  });

  it('renders with custom "as" prop', () => {
    const { getByText } = render(
      <AppProviderComponent>
        <TypographyComponent as="h1">Hello, World!</TypographyComponent>
      </AppProviderComponent>
    );
    const element = getByText(/Hello, World!/i);
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toEqual("h1");
  });
});
