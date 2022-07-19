import React, { Component } from "react";
import { Line } from "react-chartjs-2";


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(1, 181, 199, 0.5)",
        data: [100, 70, 20, 100, 120, 50, 70, 50, 50, 100, 50, 90] 
      }
    ]
  };

export default class LineChart extends React.Component {
    render() {
      return (       
        <div className="App">
          <Line data={data}         
              options={{
                responsive: true,
              legend: {
                display: false,
              },
              tooltips: {
                mode: 'index',
                intersect: false,
              }
              }} />
        </div>
          );
        }
      }