import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "../";

describe("Link Component tests", () => {
  const href = "#";
  it("renders correctly with given text", () => {
    render(<Link href={href}>Click me</Link>);

    const linkElement = screen.getByText("Click me");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders correctly with React node as text", () => {
    render(
      <Link href={href}>
        <span>Click me</span>
      </Link>
    );

    const linkElement = screen.getByText("Click me");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe("SPAN");
  });
});
