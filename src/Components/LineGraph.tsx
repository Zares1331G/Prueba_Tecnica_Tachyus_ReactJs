import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function LineGraph() {
  const { data }: any = useContext(DataContext);

    const options = {
    title: {
      text: "Line Graph",
    },
    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2020",
      },
    },
    yAxis: {
        title: {
          text: 'Property growth'
        }
      },
    series: [
      {
        name: "Oil",
        data: data?.map((element: any) => parseInt(element.Qo)),
      },
      {
        name: "Water",
        data: data?.map((element: any) => parseInt(element.Qw)),
      },
      {
        name: "Gas",
        data: data?.map((element: any) => parseInt(element.Qg)),
      },
    ],
  };

  return (data[0].Qo ?(
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  ): "")
}
