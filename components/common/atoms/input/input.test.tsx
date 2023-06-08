import { renderHook, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputComponent from "./input.component";
import AppProviderComponent from "@/components/providers/app/app-provider.component";
import "@testing-library/jest-dom";
import { useTheme } from "@emotion/react";
import { ReactNode } from "react";

describe("InputComponent", () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <AppProviderComponent>{children}</AppProviderComponent>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });
  const colors = result.current.colors;

  it("should render input element with default styles", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" />
      </AppProviderComponent>
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle(`border-color: ${colors.border[400]}`);
    expect(inputElement).toHaveStyle(`color: ${colors.text[500]}`);
  });

  it("should render error status style", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" status="error" />
      </AppProviderComponent>
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveStyle(`border-color: ${colors.error[500]}`);
    expect(inputElement).toHaveStyle(`color: ${colors.error[500]}`);
  });

  it("should render success status style", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" status="success" />
      </AppProviderComponent>
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveStyle(`border-color: ${colors.success[500]}`);
    expect(inputElement).toHaveStyle(`color: ${colors.success[500]}`);
  });

  it("should render helper text when provided", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" helperText="Helper Text" />
      </AppProviderComponent>
    );

    const helperTextElement = screen.getByText(/Helper Text/i);
    expect(helperTextElement).toBeInTheDocument();
  });

  it("should not render helper text when not provided", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" />
      </AppProviderComponent>
    );

    const helperTextElement = screen.queryByText(/Helper Text/i);
    expect(helperTextElement).not.toBeInTheDocument();
  });

  it("should call onChange callback on input change", async () => {
    const MOCK_TEXT = "Hello, World :)";
    const onChangeMock = jest.fn();
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" onChange={onChangeMock} />
      </AppProviderComponent>
    );

    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, MOCK_TEXT);

    expect(onChangeMock).toHaveBeenCalledTimes(MOCK_TEXT.length);
  });

  it("should be disabled when disabled prop is true", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" disabled />
      </AppProviderComponent>
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("should have full width when fullWidth prop is true", () => {
    render(
      <AppProviderComponent>
        <InputComponent role="textbox" fullWidth />
      </AppProviderComponent>
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveStyle(`width: 100%`);
  });
});
