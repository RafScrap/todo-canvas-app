import {render} from "react-dom";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const RatingBar = ({dataOthers, score}) => {

  let dataLabels : string[] = [];
  for (let i = 0; i < dataOthers.length; i++) {
    dataLabels.push(i.toString())
  }

  let dataColors : string[] = [];
  for (let i = 0; i < dataOthers.length; i++) {
    i == score ? dataColors.push("rgba(100, 100, 255, 0.5)") : dataColors.push("rgba(68, 200, 74, 0.5)");
  }

  const data = {
    labels: dataLabels,
    datasets: [ {
        categoryPercentage: 1.0, 
        barPercentage: 1.0,
        data: dataOthers,
        backgroundColor: dataColors,
        borderColor: 'black'
      }
    ]
  };
    return (
     <Bar
      data={data}
      options = {{
        plugins: {
          legend: {
            display: false
          }
        },
        maintainAspectRatio: false,
     }}
    />
   );
  };

export const CircularBar = ({percentage}) => {  
  return (
    <CircularProgressbar value={percentage} text={`${percentage}%`} />
  )
}