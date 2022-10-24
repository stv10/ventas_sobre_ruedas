import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

const Datos = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item"><NavLink to="autos" className="nav-link">Autos</NavLink></li>
                <li className="nav-item"><NavLink to="motos" className="nav-link">Motos</NavLink></li>
                <li className="nav-item"><NavLink to="bicicletas" className="nav-link">Bicicletas</NavLink></li>
            </ul>
            <hr />

            <Outlet/>
        </>
    );
};

export default Datos;