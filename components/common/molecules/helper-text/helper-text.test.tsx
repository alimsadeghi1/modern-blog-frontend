import React, { ReactNode } from "react";
import { render, renderHook } from "@testing-library/react";
import HelperTextComponent from "./helper-text.component";
import "@testing-library/jest-dom";
import AppProviderComponent from "@/components/providers/app/app-provider.component";
import { useTheme } from "@emotion/react";

describe("HelperTextComponent", () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <AppProviderComponent>{children}</AppProviderComponent>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });
  const colors = result.current.colors;

  it("renders correctly with default status", () => {
    const { getByText } = render(
      <AppProviderComponent>
        <HelperTextComponent>This is a helper text</HelperTextComponent>
      </AppProviderComponent>
    );
    const helperTextElement = getByText("This is a helper text");
    expect(helperTextElement).toBeInTheDocument();
    expect(helperTextElement).toHaveStyle(`color: ${colors.text[300]}`); // Assuming default color is black
  });

  it("renders correctly with error status", () => {
    const { getByText } = render(
      <AppProviderComponent>
        <HelperTextComponent status="error">
          This is an error message
        </HelperTextComponent>
      </AppProviderComponent>
    );
    const helperTextElement = getByText("This is an error message");
    expect(helperTextElement).toBeInTheDocument();
    expect(helperTextElement).toHaveStyle(`color: ${colors.error[500]}`); // Assuming error color is red
  });

  it("renders correctly with success status", () => {
    const { getByText } = render(
      <AppProviderComponent>
        <HelperTextComponent status="success">
          This is a success message
        </HelperTextComponent>
      </AppProviderComponent>
    );
    const helperTextElement = getByText("This is a success message");
    expect(helperTextElement).toBeInTheDocument();
    expect(helperTextElement).toHaveStyle(`color: ${colors.success[500]}`); // Assuming error color is red
  });
});
