import { useState } from "react";
import FileUpload from "./Components/FileUpload";
import Table from "./Components/Table";
import { DataProvider } from "./Context/DataContext";
import LineGraph from "./Components/LineGraph";
import Map from "./Components/Map";

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <DataProvider>
      <FileUpload setActive={setActive} />
      {active ? <Table /> : ""}
      {active ? <LineGraph /> : ""}
      {active ? <Map /> : ""}      
    </DataProvider>
  );
}
