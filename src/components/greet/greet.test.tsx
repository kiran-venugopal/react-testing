import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textEl = screen.getByText(/hello/i);
    expect(textEl).toBeInTheDocument();
  });

  //   test("renders with a name", () => {
  //     render(<Greet name="Kiran" />);
  //     const textEl = screen.getByText("Hello Kiran");
  //     expect(textEl).toBeInTheDocument();
  //   });
});
