import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {ChartData} from './api';


export default function Chart () {
    const [dailyTotal, setDailyTotal] = useState([]);

    useEffect(() => {
        const fetchChart = async () => {
        setDailyTotal(await ChartData());
        }
        fetchChart();
    },[setDailyTotal]
    );
        

    const LineChart = (
        dailyTotal.length ?
        ( <Line 
            data = {{
                labels: dailyTotal.map(({date}) => date),
                datasets: [{
                    data: dailyTotal.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: 'teal',

                },{
                    data: dailyTotal.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: 'orange',
                    backgroundColor: 'silver'
                }],
        }}
        />): "Loading..."
    )
          
    return (
    <div>
        <h3>Global Data</h3>
        {LineChart}
    </div>
    )
    
}
