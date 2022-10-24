import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid align-items-center p-4">
                    <NavLink to="/" className="navbar-brand">Home</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink to="opciones" className="nav-link">Opciones</NavLink></li>
                            <li className="nav-item"><NavLink to="datos" className="nav-link">Datos</NavLink></li>
                            <li className="nav-item"><NavLink to="acerca" className="nav-link">Acerca de...</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet/>

            {/* <footer className="fixed-bottom w-100 mt-5 p-4 bg-light">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="fs-3">Venta sobre ruedas</Link>
                    <div className="fs-5">@ACME 2022</div>
                </div>
            </footer> */}
        </>
    );
};

export default Home;
