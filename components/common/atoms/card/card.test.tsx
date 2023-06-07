import React from "react";
import { render } from "@testing-library/react";
import CardComponent from "./card.component";
import AppProviderComponent from "@/components/providers/app/app-provider.component";
import "@testing-library/jest-dom";

describe("CardComponent", () => {
  it("renders with default props", () => {
    const { container } = render(
      <AppProviderComponent>
        <CardComponent />
      </AppProviderComponent>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom props", () => {
    const { container } = render(
      <AppProviderComponent>
        <CardComponent data-testid="card" className="custom-class" />
      </AppProviderComponent>
    );
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveAttribute("data-testid", "card");
  });
});
