import { tableHeaders } from "./constants";
import { TableRow } from "./TableRow";
import { TableProps } from "./types.ts";
import "./character-ratings.css";
import { Character } from "../public/fma-data.ts";

export function Table({ data }: TableProps) {
  const isEven = (index: number) => index % 2 === 0;

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table className="table">
        <tr>
          {tableHeaders.map((word) => (
            <th className="th" key={word}>
              {word}
            </th>
          ))}
        </tr>
        {data
          .map((character: Character) => character)
          .sort((a, b) => b.votes - a.votes)
          .slice(0, 5)
          .map((obj: Character, index: number) => (
            <TableRow
              key={`table-row-${obj.name}`}
              character={obj}
              isEven={isEven(index)}
            />
          ))}
      </table>
    </section>
  );
}

// **  note to future self  **
//line 20 .map is to create new shallow copy of data array
// so that sorting doesn't mutate the original array.  This way, the table is sorted,
// but the cards are not, because they both receive the same data prop from their shared parent
// .map on line 23 maps the new shallow copied array
