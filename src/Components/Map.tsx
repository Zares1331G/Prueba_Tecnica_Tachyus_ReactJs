import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Map() {
  const { data }: any = useContext(DataContext);
  const [topology, setTopology] = useState();

  //@ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await fetch(
      "https://code.highcharts.com/mapdata/countries/us/custom/us-all-mainland.topo.json"
    ).then(async (response) => setTopology(await response.json()));
  }, []);

  console.log("Mapa",topology)

  const options = {
    chart: {
      map: topology,
      height: (9 / 16) * 100 + "%", // 16:9 ratio
    },

    title: {
      text: "USA earthquakes from 2000 to 2019 (mag 4.5+)",
      style: {
        fontSize: 13,
      },
    },
    subtitle: {
      text: 'Source <a hef="https://earthquake.usgs.gov/" target="_blank">USGS</a>',
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      visible: false,
      start: 1,
      min: 1,
      max: 40,
      minColor: "#ffcccc",
      maxColor: "#cc0000",
    },

    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}",
    },
    plotOptions: {
      mappoint: {
        dataLabels: {
          enabled: true,
          /* formatter: function () {
            if (typeof this.point.clusterPointsAmount === "undefined") {
              return "";
            }
            return this.point.clusterPointsAmount;
          }, */
        },
        cluster: {
          enabled: true,
          allowOverlap: false,
          animation: {
            duration: 450,
          },
          layoutAlgorithm: {
            type: "grid",
            gridSize: 70,
          },
          zones: [
            {
              from: 1,
              to: 10,
              marker: {
                radius: 15,
              },
            },
            {
              from: 11,
              to: 20,
              marker: {
                radius: 15,
              },
            },
            {
              from: 21,
              to: 30,
              marker: {
                radius: 15,
              },
            },
            {
              from: 31,
              to: 200,
              marker: {
                radius: 15,
              },
            },
          ],
        },
      },
    },
    series: [
      {
        name: "Basemap",
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false,
      },
      {
        type: "mappoint",
        name: "Earthquake",
        colorKey: "clusterPointsAmount",
        color: "#ffcccc",
        data: [
          {
            name: "6km NE of Port Orford, Oregon",
            lat: 42.776,
            lon: -124.476666666667,
          },
          {
            name: "17km SSE of Tres Pinos, CA",
            lat: 36.6455,
            lon: -121.274,
          },
        ],
      },
    ],
  }

  return data[0]?.Qo && topology ? (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
  ) : (
    ""
  );
}
