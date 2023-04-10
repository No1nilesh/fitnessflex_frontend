import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import Chart from 'chart.js/auto';
import "./chart.css"
import { loadMonthlyincomeData, clearErrors } from '../../../actions/adminAction';

const IncomeChart = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMonthlyincomeData());
    }, []);

    const { incomedata, loading } = useSelector((state) => state.fetchMonthlyIncome);

    const chartData = {
        labels: !loading && incomedata && Array.isArray(incomedata) && incomedata.map(data => `${data.month}/${data.year}`),
        datasets: [
            {
                label: 'Monthly Income',
                data: !loading && incomedata && Array.isArray(incomedata) && incomedata.map(data => data.income/100),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
   
    const options = {
        scales: {
            y: {
              grid: {
                color: "rgba(255, 255, 255)",
                borderWidth: 2
              },
              ticks: {
                color: "rgba(255, 255, 255)",
                }
            },
            x: {
              grid: {
                color: "rgba(255, 255, 255)",
                borderWidth: 2
              },
              ticks: {
                color: "rgba(255, 255, 255)",
                }
            }

            
          },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          line: {
            tension: 0.4,
            borderWidth: 3, // set the border width to make the line thicker
            borderColor: '#fff', // set the border color to white
          },
        },
      };
      

    return (
        <div style={{ width: '100%', margin: '0 auto' , position:"relative", top: "10px" }}>
            <Line className="exclude-canvas"  data={chartData} options={options}/>
        </div>
    )
}

export default IncomeChart;
