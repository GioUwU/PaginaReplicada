import { useState } from 'react'; 
import s from './Charbarplanuse.module.css';

import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid
} from 'recharts';

import { BsTelephoneForward, BsWifi } from "react-icons/bs";

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);



const data = [
    { name: 'Plan TR5', x: 12, y: 23, z: 122 },
    { name: 'Plan TR5', x: 22, y: 3, z: 73 },
    { name: 'Plan TR5', x: 13, y: 15, z: 32 },
    { name: 'Plan TR5', x: 44, y: 35, z: 23 },
    { name: 'Plan TR7', x: 35, y: 45, z: 20 },
    { name: 'Plan TR5', x: 26, y: 55, z: 10 },
];

export default function Charbarplanuse() {
    // eslint-disable-next-line 
    const [activeIndex, setActiveIndex] = useState(0);

    // eslint-disable-next-line 
    const onBarClick = (data, index) => {
        setActiveIndex(index);
    };


    const [chart, setChart] = useState(null);


    const config = {
        type: 'pie',
        data: {
            labels: ['example1', 'example2', 'example3', "example4" ],
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [750, 150, 60, 40 ],   
                    backgroundColor: [
                        /* greenlight, yellowlight, blueligth, purplelitgh */
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 255, 0, 0.5)',
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(255, 0, 255, 0.5)',
                    ],
                    hoverOffset: 4
                },
            ],
        },
        options: {
            aspectRatio: 2,
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Chart.js Pie Chart'
                }
            }
        },
    };

    const chartRef = (reference) => {
        if (reference && !chart) {
            setChart(new Chart(reference, config));
        }
    };

    


    return (
        <div className={s.container}>
            <div className={s.chart}>
                <div className={s.divtitle}>
                    <h2 className={s.title}>Segmentacion de planes</h2>
                    <p className={s.subtitle}> <BsTelephoneForward className={s.icon}/> Movilidad</p>
                    <p className={s.subtitle}> <BsWifi className={s.icon} /> Wifi</p>
                </div>
        <BarChart width={1055} height={300} data={data} layout="vertical" >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" hide/>
            <YAxis dataKey="name" type="category" />
                    <Bar dataKey="x" stackId="a" fill="#00bdc4" />
                    <Bar dataKey="y" stackId="a" fill="#1ceaf1"  />
                    <Bar dataKey="z" stackId="a" fill="#99fcff" />
        </BarChart>
        </div>
        <div className={s.chart2} >
                <div className={s.divtitle}>
                    <h2 className={s.title}>Clientes con adeudo vencido</h2>
                </div>
                <canvas  ref={chartRef} />
        </div>
        </div>
    );
}