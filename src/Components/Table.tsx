import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
  GridItemChangeEvent,
  GridRowClickEvent,
  GridDataStateChangeEvent,
} from "@progress/kendo-react-grid";
import { process, State } from "@progress/kendo-data-query";
import { Product } from "./interfaces";
import "@progress/kendo-theme-default/dist/all.css";

const initialDataState: State = {
  sort: [{ field: "code", dir: "asc" }],
  take: 10,
  skip: 0,
};

const Table = () => {
  const { data: sampleProducts }: any = useContext(DataContext);

  const [data, setData] = React.useState(sampleProducts);
  const [editID, setEditID] = React.useState<number | null>(null);
  const [dataState, setDataState] = React.useState<State>(initialDataState);

  const rowClick = (event: GridRowClickEvent) => {
    setEditID(event.dataItem.ProductID);
  };

  const itemChange = (event: GridItemChangeEvent) => {
    const inEditID = event.dataItem.ProductID;
    const field = event.field || "";
    const newData = data.map((item: { ProductID: any }) =>
      item.ProductID === inEditID ? { ...item, [field]: event.value } : item
    );
    
    setData(newData);
  };

  const closeEdit = (event: { target: any; currentTarget: any }) => {
    if (event.target === event.currentTarget) {
      setEditID(null);
    }
  };

  const addRecord = () => {
    const newRecord = { ProductID: data.length + 1 };

    setData([newRecord, ...data]);
    setEditID(newRecord.ProductID);
  };

  return sampleProducts ? (
    <Grid
      pageable={true}
      sortable={true}
      filterable={true}
      style={{ height: "500px" }}
      data={process(
        data?.map((item: Product) => ({
          ...item,
          inEdit: item?.ProductID === editID,
        })),
        dataState
      )}
      {...dataState}
      onDataStateChange={(e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
      }}
      editField="inEdit"
      onRowClick={rowClick}
      onItemChange={itemChange}
    >
      <GridToolbar>
        <div onClick={closeEdit}>
          <button
            title="Add new"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={addRecord}
          >
            Agregar nuevo
          </button>
        </div>
      </GridToolbar>
      {Object.keys(data[0])?.map((key) => {
        return key === "ProductID" ? (
          <Column field={key} title={key} width="150px" editable={false} />
        ) : (
          <Column field={key} title={key} width="150px" />
        );
      })}
    </Grid>
  ) : (
    ""
  );
};

export default Table;
