import FileUpload from "./Components/FileUpload";
import Table from "./Components/Table";
import {DataProvider } from "./Context/DataContext";

export default function App() {

  return (
    <DataProvider>
      <FileUpload />
      <Table />
    </DataProvider>
  );
}
