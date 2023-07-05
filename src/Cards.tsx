import React from "react";
import "./character-cards.css";
import { TableProps } from "./types";

export class Cards extends React.Component<TableProps> {
  render() {
    const { data } = this.props;
    return (
      <section id="character-cards">
        {data.map((character) => (
          <div key={character.name} className="card">
            <div className="card-titles">
              <h3>{character.name}</h3>
              <h4>{character.nickName}</h4>
            </div>
            <img src={character.imageUrl} alt="" />
            <p>{character.background}</p>
          </div>
        ))}
      </section>
    );
  }
}
