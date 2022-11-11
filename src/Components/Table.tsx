import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import product from './product.json'

const Table = () => {
  const { data }:any = useContext(DataContext);

  console.log("Info DAta", data)

  return (
    <Grid
      style={{
        height: "600px",
      }}
      data={product}
    >
      {Object.keys(product[0]).map((key)=>{
        return(
          <GridColumn field={key} title={key} width="50px" />
        )
      })}
    </Grid>
  );
};

export default Table;
