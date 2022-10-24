import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import { getAuto, grabarAuto } from '../../servicios/datos_autos.js';
import Auto from "../../modelo/auto.js";
import axios from "axios";

const FormAuto = () => {
    const [auto, setAuto] = useState(null);
    const params = useParams();
    const idAuto = Number(params.idAuto);
    const navigate = useNavigate();

    useEffect(() => {
        if (idAuto < 0)
            setAuto(new Auto());
        else
           getAuto(idAuto)
           .then((res) => setAuto(res.data))
           .catch((err) => console.log("No se encontro el id del auto"));
    }, []);

    const handleEdits = (ev) => {
        const value = ev.target.value;
        setAuto(prev => {
            return {...prev, [ev.target.id]: value}
        });
    };

    function aceptarCambios() {
        grabarAuto(auto);
        navigate("/datos/autos");
    }

    if (!auto) return <h2 className='text-center'>Auto no encontrado</h2>;

    return (
        <div className="text-start col-6 offset-3 border p-3">
            <h2 className="mt-3 text-center">Datos del auto</h2>
            <div className="mb-3 col-2">
                <label htmlFor="id" className="form-label">Id</label>
                <input type="text" className="form-control" id="id" value={auto.id} onChange={handleEdits}
                       readOnly={true} disabled/>
            </div>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input type="text" className="form-control" id="marca" value={auto.marca} onChange={handleEdits}/>
            </div>
            <div className="mb-3">
                <label htmlFor="modelo" className="form-label">Modelo</label>
                <input type="text" className="form-control" id="modelo" value={auto.modelo} onChange={handleEdits}/>
            </div>
            <div className="mb-3 col-2">
                <label htmlFor="anio" className="form-label">Año</label>
                <input type="text" className="form-control" id="anio" value={auto.anio} onChange={handleEdits}/>
            </div>
            <div className="mb-3 text-end">
                <button className="btn btn-primary me-1" onClick={aceptarCambios}>Aceptar</button>
                <button className="btn btn-secondary ms-1" onClick={() => navigate(-1)}>Cancelar</button>
            </div>
        </div>
    );
};

export default FormAuto;