import { useState } from "react";
import FileUpload from "./Components/FileUpload";
import Table from "./Components/Table";
import { DataProvider } from "./Context/DataContext";

export default function App() {
const [active, setActive] = useState(false)

  return (
    <DataProvider>
      <FileUpload setActive={setActive}/>
      {active ? <Table /> : ""}
    </DataProvider>
  );
}
