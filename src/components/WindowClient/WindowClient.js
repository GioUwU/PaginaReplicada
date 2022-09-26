import { BsTelephoneForward, BsWifi, BsPersonCircle, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import s from './WindowClient.module.css';

const users = [{
    id: 1,
    nombre: "Nombre Apellido",
    servicio: BsWifi,
    uso: "voz",
    abono: 15000,
    actual: 12000, 
    porcentaje: 3,
  
},
{
    id: 2,
    nombre: "Nombre Apellido",
    servicio: BsTelephoneForward,
    uso: "datos",
    abono: 15000,
    actual: 12000,
    porcentaje: 90,
  
},
{
    id: 3,
    nombre: "Nombre Apellido",
    servicio: BsWifi,
    uso: "datos",
    abono: 15000,
    actual: 12000,
    porcentaje: 99,
   
},
{
    id: 4,
    nombre: "Nombre Apellido",
    servicio: BsTelephoneForward,
    uso: "datos",
    abono: 15000,
    actual: 12000,
    porcentaje: 99,
   
},
{
    id: 5,
    nombre: "Nombre Apellido",
    servicio: BsTelephoneForward,
    uso: "datos",
    abono: 15000,
    actual: 12000,
    porcentaje: 99,

},
{
    id: 6,
    nombre: "Nombre Apellido",
    servicio: BsTelephoneForward,
    uso: "datos",
    abono: 15000,
    actual: 12000,
    porcentaje: 99,
},
];

export default function WindowClient() {

    return (
        <div className={s.container}>
            <div className={s.container__title}>
                <h4>Usuarios en umbrales de voz, datos, o SMS</h4>
                <searh className={s.container__search}>
                    <input type="text" placeholder="Buscar" />
                </searh>
            </div>
            <div className={s.container__table}>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Servicio</th>
                            <th>Uso</th>
                            <th>Abono</th>
                            <th>Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td ><BsPersonCircle/>{user.nombre}</td>
                                <td><user.servicio /></td>
                                <td>{user.uso}</td>
                                <td color="red">{user.abono}</td>
                                <td>{user.actual} <span className={s.span}>{user.porcentaje}%</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={s.pagination}>
                <button className={s.pagination__button}><BsArrowLeft /></button>
                <button className={s.pagination__button}>1</button>
                <button className={s.pagination__button}>2</button>
                <button className={s.pagination__button}>3</button>
                <button className={s.pagination__button}>4</button>
                <button className={s.pagination__button}>5</button>
                <button className={s.pagination__button}><BsArrowRight/></button>
            </div>
        </div>
    )
}