import '../styles/CallToAction.css';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Family-owned Mediterranean restaurant with traditional recipes and a modern twist.</p>
        <Link to="/booking" className="cta__btn">Reserve a Table</Link>
      </div>
      <div className="cta__image">
        <img src="/images/hero-food.jpg" alt="Delicious food" />
      </div>
    </section>
  );
}

export default CallToAction;
