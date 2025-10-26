import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm validation", () => {
  
  test("all input fields have correct HTML5 validation attributes", () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute("required");

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });

  test("submit button is disabled when form is invalid and enabled when valid", () => {
    render(<BookingForm />);
    const submitBtn = screen.getByRole("button", { name: /Submit reservation/i });

    // initial state: button disabled
    expect(submitBtn).toBeDisabled();

    // fill valid data
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2025-10-26" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    // button should now be enabled
    expect(submitBtn).toBeEnabled();
  });

});
