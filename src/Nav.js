function Nav() {
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
