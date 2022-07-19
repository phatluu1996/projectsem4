import React, { Component } from "react";
import { Line } from "react-chartjs-2";




export default class LineChart extends React.Component {

  data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(1, 181, 199, 0.5)",
        data: this.props.data
      }
    ]
  };

    render() {
      return (       
        <div className="App">
          <Line data={this.data}         
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