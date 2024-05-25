import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from "..";

describe("Tests for the Text component", () => {
  const text = "Hello world";

  it("Renders the content of a given string", () => {
    render(<Text content={text} />);

    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
});
