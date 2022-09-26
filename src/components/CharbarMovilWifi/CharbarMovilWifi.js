import { useState } from 'react';
import { BsTelephoneForward, BsWifi } from "react-icons/bs";
import s from './CharbarMovilWifi.module.css';

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const usagewifi = 80;
const usagecellular = 20;

export default function CharbarMovilWifi() {
     // eslint-disable-next-line
    const [chart, setChart] = useState(null);

    if (chart !== null) {
        chart.data.datasets[0].data[0] = usagewifi;
        chart.data.datasets[0].data[1] = usagecellular;
        chart.update();
    }

    /* horizontalbar chart type graphic bullet table*/
    const data = [
        { name: "A", x: usagewifi, y:usagecellular },
    ];

    return (
        <div className={s.container}>
            <div className={s.containeTitle}>
                <h2 className={s.title}>Tipos de usuarios totales global</h2>
                <div className={s.containerIcon}>
                    <p>Movilidad</p>
                    <div className={s.containericonsbot}>
                        <button className={s.buttonbaremerald}></button>
                    </div>
                    <p>Wifi</p>
                    <div className={s.containericonsbot}>
                        <button className={s.buttonbarblue}></button>
                    </div>
                </div>
            </div>
        <div className={s.divchar}>
        <BsTelephoneForward className={s.icon} />
        <BarChart width={1600} height={50} data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip  />
                    <Bar dataKey="x" stackId="a" fill="#00ff7f" />
                    <Bar dataKey="y" stackId="a" fill="#0099ff" />
        </BarChart>
                <BsWifi className={s.icon} />
        </div>
    </div>
    );
}