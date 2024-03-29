import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <>
      <Accordion />
    </>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((data, index) => (
        <Item key={index} title={data.title} text={data.text} num={index + 1} />
      ))}
    </div>
  );
}

function Item({ title, text, num }) {
  const [isOpen, setIsOpen] = useState(false);

  function doOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={doOpen}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}

export default App;
