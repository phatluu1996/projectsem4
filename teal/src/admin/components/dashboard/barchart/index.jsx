import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import { range } from "../../../../actions";

export default class BarChart extends React.Component {

  data = () => { 
    return {
    labels: range(1, 31),
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: 'rgba(1, 181, 199, 0.5)',
      borderColor: 'rgba(1, 181, 199, 1)',
      borderWidth: 1,
      data:  this.props.data
    }]}
  }
    render() {
      return (
        <div>
           <Bar
          data={this.data}
          options={{
            responsive: true,
            legend: {
              display: false,
            }
          }}
        />
          </div>
          );
        }
      }