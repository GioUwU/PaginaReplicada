import { useState } from 'react';
import s from './Charbarsclient.module.css';
import { BiGroup, BiMessageSquareDetail } from "react-icons/bi";
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


const scores = [12000, 10000, 8000, 8100, 15000, 18000, 4000];
const labelx = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

const scores2 = [35, 37];
const labelx2 = ['enero' , 'febrero'];

export default function Charbarsclient() {
    const [chart, setChart] = useState(null);
    const [chart2, setChart2] = useState(null);

    if (chart !== null && chart2 !== null) {
        chart.data.datasets[0].data = scores;
        chart.data.labels = labelx;
        chart.update();
    }

    const config = {
        type: 'line',
        data: {
            labels: labelx,
            datasets: [
                {
                    label: '',
                    data: scores,
                    backgroundColor: "rgba(75,192,192, 0.2)",
                    borderColor: "rgba(75,192,192, 2)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            fill: true,
            scales:
            {
                y:
                {
                    beginAtZero: true
                }
            }

        },
        
    };

    const config2 = {
        type: 'line',
        data: {
            labels: labelx2,
            datasets: [
                {
                    label: "",
                    data: scores2,
                    backgroundColor: "rgba(75,192,192, 0.2)",
                    borderColor: "rgba(75,192,192, 2)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            fill: true,
            scales:
            {
                y:
                {
                    min: 25,
                    max: 40,
                }
            }
        }
    };

    

    const chartRef = (reference) => {
        if (reference && !chart) {
            setChart(new Chart(reference, config));
        }
    };

    const chartRef2 = (reference) => {
        if (reference && !chart) {
            setChart2(new Chart(reference, config2));
        }
    };

    const client = [{ name: 'empresa1', value: 1000, portcentaje: '10' }, { name: 'empresa2', value: 2000, portcentaje: '30' }, { name: 'empresa3', value: 3000, portcentaje: '50' }, { name: 'empresa4', value: 4000, portcentaje: '60' }, { name: 'empresa5', value: 5000, portcentaje: '20' }, { name: 'empresa6', value: 6000, portcentaje: '80' }];


/*
 <canvas ref={chartRef} />
            <canvas ref={chartRef2} />*/
    return (
        <div className={s.container}>
            <div className={s.container2}>
                <div className={s.titleprin}>
                    <h1>Usuarios</h1>
                </div>
                <div className={s.containeruserglobal}>
                <div className={s.containeruser}>
                    <h2 className={s.titlecontainer}> 24.7k <span className={s.titlespanv}>+49%</span></h2>
                    <p className={s.titlep}>Usuarios Totales</p>
                </div>
                <div className={s.containeruser}>
                    <h2 className={s.titlecontainer}> 56.9k <span className={s.titlespanv}>+7% </span></h2>
                    <p className={s.titlep}>Nuevos Este mes</p>
                </div>
                <div className={s.containeruser}>
                    <h2 className={s.titlecontainer}> 350 <span className={s.titlespanr} >-3%</span></h2>
                    <p className={s.titlep}>Suspendidos este mes</p>
                </div>
                <div className={s.containeruser}>
                    <h2 className={s.titlecontainer}> 189 <span className={s.titlespana}>-7%</span></h2>
                    <p className={s.titlep}>Cancelados este mes</p>
                </div>
            </div>
                <canvas className={s.chart1} ref={chartRef} />
            </div>
            <div className={s.container3}>
                    <div className={s.titleprin2}>
                    <h1>Top clientes por</h1>
                    <div className={s.containerselect}>
                        <p className={s.ptop}> <BiGroup/> Facturacion</p>
                        <p className={s.ptop}> <BiMessageSquareDetail/> Usuarios</p>
                    </div>
                </div>
                <div className={s.containerusertop}>
                    <h1 className={s.title}>37</h1>
                    <p className={s.titlep}>Nuevos clientes este mes</p>
                </div>
                <div className={s.containerusertop}>
                     <canvas className={s.chart2} ref={chartRef2} />
                </div>
                <div className={s.containerusertops}>
                    <div className={s.clientmount1}>
                        <h4 className={s.title4}>Cliente</h4>
                        <h4 className={s.title4}>Monto</h4>
                    </div>
                    <div className={s.clientmount}>
                        {client.map((item) => (
                            <div className={s.clientmount2}>
                                <p className={s.titlep2}>{item.name} </p>
                                <p className={s.titlep3}>${item.value} ({item.portcentaje}%) </p>
                            </div>
                        ))}
                        <div className={s.clientbuttons}>
                            <button className={s.button1}>Este Mes</button>
                            <button className={s.button1}>Mes Anterior</button>
                            <button className={s.button1}>Hace 3 meses</button>
                        </div>
                    </div>
                </div>   
            </div>    
        </div>
    );
}