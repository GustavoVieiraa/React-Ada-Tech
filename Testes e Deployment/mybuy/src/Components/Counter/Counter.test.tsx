import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter > Unit tests", () => {
  it("should render Counter component correctly", () => {
    render(<Counter />);

    const counterValueElement = screen.getByRole("heading", { level: 1 }); // <h1>0</h1>
    const increaseButtonElement = screen.getByRole("button", {
      name: "Aumentar",
    });
    const decreaseButtonElement = screen.getByRole("button", {
      name: "Diminuir",
    });

    expect(counterValueElement).toHaveTextContent("0");
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  it("should decrease counter value when increase button is clicked", () => {
    render(<Counter />);

    const counterValueElement = screen.getByRole("heading", { level: 1 });
    const decreaseButton = screen.getByRole("button", { name: "Diminuir" });

    userEvent.click(decreaseButton);

    expect(counterValueElement).toHaveTextContent("-1");
  });

  it("should increase counter value when increase button is clicked", () => {
    render(<Counter />);

    const increaseButton = screen.getByRole("button", { name: "Aumentar" });
    userEvent.click(increaseButton);

    const counterValueElement = screen.getByText("1", { exact: true });

    expect(counterValueElement).toBeInTheDocument();
  });
});
