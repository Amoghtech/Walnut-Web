import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const Chart = (props) => {
  //   const [am,setam]=useState([])
  let temp = Array.apply(null, Array(12)).map(function (x, i) {
    return 0;
  });

  props.amounts.forEach((a) => {
    temp[a.month - 1] = a.amount;
  });
  //   setam(temp)

  const state = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Amount/month',
        backgroundColor: '#52ffe2',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: temp,
      },
    ],
  };

  const state1 = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Amount/month',
        backgroundColor: [
          '#03fc7f',
          '#03fcf0',
          '#0390fc',
          '#c603fc',
          '#ecfc03',
          "#fc7f03",
          "#fc0373",
          "#e803fc",
          "#97d1d0",
          "#a0f79c",
          "#fcd179",
          "#fa5a5a"
        ],
        data: temp,
      },
    ],
  };

  return (
    <div>
      {!props.loader && props.bar === 1 && (
        <Bar
          data={state}
          width={100}
          height={400}
          options={{
            title: {
              display: true,
              text: 'Expense per month',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      )}
      {!props.loader && props.bar === 2 && (
        <Doughnut
          data={state1}
          width={100}
          height={400}
          options={{
            title: {
              display: true,
              text: 'Expense per month',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  );
};

export default Chart;
