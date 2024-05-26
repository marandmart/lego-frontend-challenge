import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../";

// Mocking the CSS module
jest.mock("./Modal.module.scss", () => ({
  modal: "modal",
  visible: "visible",
  modalContent: "modalContent",
  closeButton: "closeButton",
}));

describe("Modal Component", () => {
  it("renders correctly when isOpen is true", () => {
    render(<Modal isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /X/i })).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<Modal isOpen={false} onClose={jest.fn()} />);

    const modalElement = screen.queryByText("Home")?.closest(`div.${"modal"}`);

    expect(modalElement).not.toHaveClass("visible");
  });

  it("becomes visible when isOpen changes to true", () => {
    const { rerender } = render(<Modal isOpen={false} onClose={jest.fn()} />);

    expect(
      screen.queryByText("Home")?.closest(`div.${"modal"}`)
    ).not.toHaveClass("visible");

    rerender(<Modal isOpen={true} onClose={jest.fn()} />);
    expect(screen.queryByText("Home")?.closest(`div.${"modal"}`)).toHaveClass(
      "visible"
    );
  });

  it("closes and calls onClose after delay when close button is clicked", async () => {
    jest.useFakeTimers();
    const onClose = jest.fn();

    render(<Modal isOpen={true} onClose={onClose} />);

    fireEvent.click(screen.getByRole("button", { name: /X/i }));

    jest.runAllTimers();

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
