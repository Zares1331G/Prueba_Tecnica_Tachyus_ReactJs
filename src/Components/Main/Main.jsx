import React from "react";
import Table from "../Table";
import LineGraph from "../LineGraph";
import Map from "../Map";
import style from './main.module.css'


//No alcance a terminar el mapa, por eso lo dejo comentado
export default function Main() {
  return (
    <div className={style.containerMain}>
      <Table />
      <LineGraph />
      {/* <Map /> */}
    </div>
  );
}
