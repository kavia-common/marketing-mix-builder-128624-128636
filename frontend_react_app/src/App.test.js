import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Welcome heading", () => {
  render(<App />);
  const heading = screen.getByText(/welcome/i);
  expect(heading).toBeInTheDocument();
});
