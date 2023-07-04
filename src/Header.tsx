import { listItems } from "./constants";

export function Header() {
  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {listItems.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </nav>
    </header>
  );
}
