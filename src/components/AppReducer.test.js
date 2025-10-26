import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Функции за тест
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];
const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes();
    default:
      return state;
  }
};

// Тест за initializeTimes
test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

// Тест за updateTimesReducer
test("updateTimesReducer returns same times for unknown action", () => {
  const prevState = ["17:00", "18:00"];
  const newState = updateTimesReducer(prevState, { type: "UNKNOWN_ACTION" });
  expect(newState).toEqual(prevState);
});

// Тест за updateTimesReducer с UPDATE_TIMES
test("updateTimesReducer updates times when action type is UPDATE_TIMES", () => {
  const prevState = ["17:00"];
  const newState = updateTimesReducer(prevState, { type: "UPDATE_TIMES" });
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
