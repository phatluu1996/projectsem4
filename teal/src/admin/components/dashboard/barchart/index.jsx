import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';


const state = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Dataset 1',
    backgroundColor: 'rgba(1, 181, 199, 0.5)',
    borderColor: 'rgba(1, 181, 199, 1)',
    borderWidth: 1,
    data: [35, 59, 80, 81, 56, 55, 40]
  }, {
    label: 'Dataset 2',
    backgroundColor: 'rgba(228, 228, 228, 0.5)',
    borderColor: 'rgba(228, 228, 228, 1)',
    borderWidth: 1,
    data: [28, 48, 40, 19, 86, 27, 90]
  }]
  }

export default class BarChart extends React.Component {
    render() {
      return (
        <div>
           <Bar
          data={state}
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