// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";
import HabitAddForm from "../habitAddForm";
import userEvent from "@testing-library/user-event";

// the component to test

describe("HavitAddForm", () => {
  let onAdd;
  let input;
  let button;
  beforeEach(() => {
    onAdd = jest.fn();
    render(<HabitAddForm onAdd={onAdd} />);
    input = screen.getByPlaceholderText("Habit");
    button = screen.getByText("Add");
  });

  it("calls onAdd when button clicked and valid habit is entered", () => {
    userEvent.type(input, "Hello!");
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith("Hello!");
  });

  it("does not call when the habit is empty", () => {
    userEvent.type(input, "");
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(0);
  });
});
