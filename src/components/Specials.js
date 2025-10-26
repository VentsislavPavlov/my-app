import '../styles/Specials.css';

function Specials() {
  const specialsData = [
    { title: 'Greek Salad', price: '$12.99', img: '/images/greek-salad.jpg', desc: 'Crispy lettuce, peppers, olives, feta cheese, croutons.' },
    { title: 'Bruchetta', price: '$5.99', img: '/images/bruchetta.jpg', desc: 'Grilled bread with garlic, olive oil, and seasonings.' },
    { title: 'Lemon Dessert', price: '$5.00', img: '/images/lemon-dessert.jpg', desc: 'Grandma’s authentic lemon dessert recipe.' },
  ];

  return (
    <section className="specials">
      <div className="specials__header">
        <h2>This week’s specials!</h2>
      </div>
      <div className="specials__cards">
        {specialsData.map((item, idx) => (
          <article className="card" key={idx}>
            <img src={item.img} alt={item.title} />
            <div className="card__content">
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
