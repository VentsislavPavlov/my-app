import React, { useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import "./styles/App.css";

// Инициализиране на начални часове
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];

// Reducer за updateTimes
const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(); // за сега връща същите часове
    default:
      return state;
  }
};

function App() {
  // State за unit test button
  const [number, setNumber] = useState(1);
  function increment() {
    setNumber((prev) => prev + 1);
  }

  // useReducer за availableTimes
  const [availableTimes, dispatch] = useReducer(updateTimesReducer, [], initializeTimes);

  // Функция за submit на формата
  const submitForm = (formData) => {
    if (window.submitAPI) {
      const success = window.submitAPI(formData);
      if (success) {
        window.location.href = "/confirmed";
      }
    }
  };

  return (
    <>
      <Nav />

      {/* Unit test секция */}
      <div className="unit-test-button">
        <h1 data-testid="currentNumber">{number}</h1>
        <button data-testid="add-one" onClick={increment}>
          Add one
        </button>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
