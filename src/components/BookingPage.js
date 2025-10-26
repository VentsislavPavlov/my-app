import BookingForm from "./BookingForm";
import "../styles/BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <div className="booking-page__content">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon and enjoy a cozy Mediterranean dining experience.</p>
      </div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
