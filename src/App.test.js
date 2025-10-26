import { render, fireEvent, screen } from "@testing-library/react";
import App, { initializeTimes, updateTimesReducer } from "./App";

// Мокаем fetchAPI за unit тестове
beforeAll(() => {
  window.fetchAPI = jest.fn((date) => ["17:00", "18:00", "19:00"]);
});

afterAll(() => {
  delete window.fetchAPI;
});

test("Adds one", () => {
  render(<App />);
  const heading = screen.getByTestId("currentNumber");
  const btn = screen.getByTestId("add-one");

  fireEvent.click(btn);
  expect(heading).toHaveTextContent("2");
});

test("initializeTimes returns available times from API", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00"]);
  expect(window.fetchAPI).toHaveBeenCalled();
});

test("updateTimesReducer updates times based on date", () => {
  const initialState = ["17:00"];
  const action = { type: "UPDATE_TIMES", date: new Date() };
  const newState = updateTimesReducer(initialState, action);
  expect(newState).toEqual(["17:00", "18:00", "19:00"]);
  expect(window.fetchAPI).toHaveBeenCalledWith(action.date);
});
