import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "..";
import styles from "../Title.module.scss";

describe("Tests for the Title component", () => {
  const text = "Test string";
  const heading = 1;

  it("Renders a given tag", () => {
    const tagLevel = 2;
    render(<Title level={tagLevel}>{text}</Title>);

    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe(`H${tagLevel}`);
  });

  it("Renders the content of a given string", () => {
    const textToRender = "Hello World";
    render(<Title level={heading}>{textToRender}</Title>);

    const element = screen.getByText(textToRender);
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe(textToRender);
  });

  it("Renders title with bold styling", () => {
    render(
      <Title level={heading} bold>
        {text}
      </Title>
    );

    const renderedText = screen.getByText(text);

    expect(renderedText).toBeInTheDocument();
    expect(renderedText.classList[1]).toBe(styles["heading--bold"]);
  });
});
