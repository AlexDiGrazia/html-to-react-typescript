import { listItems } from "./constants";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {listItems.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </nav>
    </header>
  );
}
