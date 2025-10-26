import '../styles/CustomersSay.css';

function CustomersSay() {
  const testimonials = [
    { name: 'Anna', stars: 5, text: 'Amazing food, will come back!' },
    { name: 'Mark', stars: 4, text: 'Great atmosphere and friendly staff.' },
    { name: 'Sophia', stars: 5, text: 'The best Mediterranean dishes in town.' },
  ];

  return (
    <section className="customers">
      <h2>What our customers say</h2>
      <div className="customers__list">
        {testimonials.map((t, idx) => (
          <div className="customer" key={idx}>
            <p className="customer__name">{t.name}</p>
            <p className="customer__stars">{'⭐'.repeat(t.stars)}</p>
            <p className="customer__text">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
