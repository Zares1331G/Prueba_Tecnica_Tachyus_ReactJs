import { useState } from "react";
import FileUpload from "./Components/FileUpload";
import { DataProvider } from "./Context/DataContext";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
export default function App() {
  const [active, setActive] = useState(false);

  return (
    <DataProvider>
      <div className="container">
        <Header />
        <FileUpload setActive={setActive} />
        {active ? <Main /> : ""}
      </div>
    </DataProvider>
  );
}
