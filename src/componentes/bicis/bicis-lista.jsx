import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { borrarBici, getBicis } from '../../servicios/datos_bicis,';

const BicisLista = () => {
    const [bicis, setBicis] = useState([])
    const navigate = useNavigate();

    const obtenerBicis = async () => {
        setBicis(await getBicis());
    }

    function agregarBici() {
        navigate("-1");
    }

    function quitarBici(id) {
        borrarBici(id);
        obtenerBicis();
    }

    useEffect(() => {
        obtenerBicis()
    },[]);

    function tablaBicis() {
        if (!bicis) return (<div>No hay datos</div>);
        return bicis.map((bici, idx) => (
            <tr key={idx}>
                <td><Link to={"" + bici.id}>{bici.id}</Link></td>
                <td>{bici.marca}</td>
                <td>{bici.rodado}</td>
                <td>{bici.anio}</td>
                <td><button onClick={()=>quitarBici(bici.id)}>Borrar</button> </td>
            </tr>
        ))
    }

    return (
        <>
            <div className="container-fluid ">
                <h1 className="mt-3 text-center">Bicis</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Rodado</th>
                        <th>Año</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tablaBicis()
                    }
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={agregarBici}>Agregar</button>
            </div>
        </>
    );
};

export default BicisLista;