import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "src/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "src/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "src/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "src/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "src/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "src/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header" style={{}}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        corrupti iure ratione adipisci sint ipsum.
      </p>
      <ul className="pizzas">
        {pizzaData.map((value) => (
          <Pizza pizzObj={value} key={value.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizzObj }) {
  return (
    <div className={pizzObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzObj.photoName} className="pizza" alt={pizzObj.name} />
      <li>
        <h1>{pizzObj.name}</h1>
        <p>{pizzObj.ingredients}</p>
        <p>{pizzObj.soldOut ? "Sold Out" : `$${pizzObj.price}`}</p>
      </li>
    </div>
  );
}

function Footer() {
  const openTime = 8;
  const closeTime = 17;
  const nowTime = new Date().getHours();
  const isOpen = nowTime >= openTime && nowTime <= closeTime;

  if (isOpen) {
    return (
      <div className="order">
        <p>
          We are open from {openTime} to {closeTime}.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open from {openTime} to {closeTime}.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>We are close.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

export default App;
