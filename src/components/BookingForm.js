import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Проверка на валидността на формата
  const validateForm = (newDate, newTime, newGuests, newOccasion) => {
    if (newDate && newTime && newGuests >= 1 && newOccasion) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (setter) => (e) => {
    const value = e.target.value;
    setter(value);

    // Обновяване на формата
    let newDate = setter === setDate ? value : date;
    let newTime = setter === setTime ? value : time;
    let newGuests = setter === setGuests ? value : guests;
    let newOccasion = setter === setOccasion ? value : occasion;

    validateForm(newDate, newTime, newGuests, newOccasion);

    // Ако е дата, обновяваме available times чрез dispatch
    if (setter === setDate) {
      dispatch({ type: "UPDATE_TIMES", date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "300px" }}>
      <h2>Book Now</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleChange(setDate)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleChange(setTime)}
        required
      >
        <option value="">Select</option>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleChange(setGuests)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleChange(setOccasion)}
        required
      >
        <option value="">Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" disabled={!isValid}>
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;
