import React from "react";
import s from "./SearchAddUser.module.css";

export default function SearchAddUser() {
    return (
        <div className={s.search}>
        <button className={s.button}>+ Nuevo cliente</button>
        <button className={s.button2}>+ Buscar Cliente o usuario</button>
        </div>
    );
}