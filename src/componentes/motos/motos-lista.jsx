import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { borrarMoto, getDatos } from '../../servicios/datos_motos';
import axios from 'axios';
import { urlServidor } from '../../constantes';

export default function MotosLista() {
    const [datos, setDatos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        obtenerDatos();
    }, []);

    async function obtenerDatos() {
        setDatos(await getDatos());
    }

    async function borrar(id) {
        borrarMoto(id);
        obtenerDatos();
        // axios.delete(`${urlServidor}/motos/${id}`)
        //     .then((respuesta)=>obtenerDatos())
        //     .catch((error)=>alert(error));
    }

    function agregarMoto() {
        navigate("-1")
    }

    return (
        <>
            <div className="container-fluid ">
                <h1 className="mt-3 text-center">Motos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Cilindrada</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map((moto, idx) => (
                                <tr key={moto.id}>
                                    <td><Link to={"" + moto.id}>
                                        {moto.id}
                                    </Link>
                                    </td>
                                    <td>{moto.marca}</td>
                                    <td>{moto.cilindros}</td>
                                    <td>{moto.color}</td>
                                    <td><button onClick={() => borrar(moto.id)}>Borrar</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={agregarMoto}>Agregar</button>
            </div>
        </>
    );

};

;