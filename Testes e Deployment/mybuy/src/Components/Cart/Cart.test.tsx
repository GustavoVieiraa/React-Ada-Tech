import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

// Mock: tornar a biblioteca react-redux fake
jest.mock("react-redux");

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });

    expect(titleElement).toHaveTextContent("Carrinho");
  });
});
