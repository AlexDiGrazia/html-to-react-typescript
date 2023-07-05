import { Header } from "./Header";
import { Table } from "./Table";
import { Cards } from "./Cards";
import { data } from "../public/fma-data";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Table data={data} />
      <Cards data={data} />
    </>
  );
}

export default App;
