import { Character } from "../public/fma-data";

type rowProps = {
  character: Character;
  isEven: boolean;
};

export function TableRow({
  character: { name, skillset, votes },
  isEven,
}: rowProps) {
  return (
    <tr className={isEven ? "dark" : "light"}>
      <td>{name}</td>
      <td>{skillset.join(", ")}</td>
      <td>{votes}</td>
    </tr>
  );
}
