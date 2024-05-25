import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "..";

describe("Tests for the Button component", () => {
  const textContent = "Hello World";

  it("renders the text content inside the button", () => {
    render(<Button content={textContent} />);

    const buttonElement = screen.getByText(textContent);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe(textContent);
  });

  it("calls onClick function when element is clicked", () => {
    const handleClick = jest.fn();
    render(<Button content={textContent} onClick={handleClick} />);

    const buttonElement = screen.getByText(textContent);
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
