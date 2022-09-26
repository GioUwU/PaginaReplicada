import React from "react";
import s from "./welcomebar.module.css";

export default function Welcomebar() {
    return (
        <div className={s.divbar}> 
        <h2>Hola Nombre Apellido, que cuentas!✋.</h2>
        <p>Estas en el Dashboard Administrativo de Nextor Movil.</p>
        </div>
    );
}