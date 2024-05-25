import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Text from "..";

describe("Tests for the Text component", () => {
  const text = "Hello world";

  it("Renders the content of a given string", () => {
    render(<Text>{text}</Text>);

    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });

  it("Renders the text content as a span", () => {
    const renderedText = "Question";
    render(<Text as="span">{renderedText}</Text>);

    const element = screen.getByText(renderedText);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("SPAN");
  });
});
