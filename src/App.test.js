import { render, screen } from "@testing-library/react";
import App from "./App";

// It takes about 7 seconds to
// complete the test
describe("Display Text", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Canvas Image/i);
    expect(linkElement).toBeInTheDocument();
  });
});
