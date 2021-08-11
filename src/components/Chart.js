import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
  //   const [am,setam]=useState([])
  let temp = Array.apply(null, Array(12)).map(function (x, i) {
    return 0;
  });

  props.amounts.forEach((a) => {
    temp[a.month - 1] = a.amount;
  });
  console.log(temp);
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
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: temp,
      },
    ],
  };

  return (
    <div>
      {!props.loader && <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 10,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />}
    </div>
  );
};

export default Chart;
