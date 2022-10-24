import React, {useEffect, useState} from 'react';
// import {borrarAuto, getAutos} from "../../servicios/datos_autos.js";
import {getAutos, borrarAuto} from "../../servicios/datos_autos";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const ListaAutos = () => {
    const [autos, setAutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        obtenerAutos()
    }, []);

    const obtenerAutos = async () => {
        setAutos(await getAutos());
    }

    const agregarAuto = () => {
        navigate("-1");
    }

    function quitarAuto(id) {
        borrarAuto(id);
        obtenerAutos();
    }

    function tablaAutos() {
        if (!autos) return (<div>No hay datos</div>);
        return autos.map((auto, idx) => (
            <tr key={idx}>
                <td><Link to={"" + auto.id}>{auto.id}</Link></td>
                <td>{auto.marca}</td>
                <td>{auto.modelo}</td>
                <td>{auto.anio}</td>
                <td><button onClick={()=>quitarAuto(auto.id)}>Borrar</button> </td>
            </tr>
        ))
    }

    return (
        <>
            <div className="container-fluid ">
                <h1 className="mt-3 text-center">Autos</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Año</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tablaAutos()
                    }
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={agregarAuto}>Agregar</button>
            </div>
        </>
    );
};

export default ListaAutos;