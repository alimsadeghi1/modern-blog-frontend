import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonComponent from "../button.component";
import AppProviderComponent from "@/components/providers/app/app-provider.component";

describe("Test `ButtonComponent` functionality", () => {
  it("should call onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <AppProviderComponent>
        <ButtonComponent role="button" onClick={mockOnClick}>
          BUTTON
        </ButtonComponent>
      </AppProviderComponent>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should be disabled when `disabled` prop is true", () => {
    render(
      <AppProviderComponent>
        <ButtonComponent role="button" disabled>
          BUTTON
        </ButtonComponent>
      </AppProviderComponent>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("should have the correct class name when `className` prop is provided", () => {
    render(
      <AppProviderComponent>
        <ButtonComponent role="button" className="custom-class">
          BUTTON
        </ButtonComponent>
      </AppProviderComponent>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
