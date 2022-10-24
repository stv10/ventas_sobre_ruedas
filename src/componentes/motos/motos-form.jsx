import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Moto from "../../modelo/moto.js";
import axios from 'axios';
import { urlServidor } from '../../constantes.js';
import { getMoto, grabarMoto } from '../../servicios/datos_motos.js';


const MotosForm = () => {
    const [moto, setMoto] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.idMoto < 0)
            setMoto(new Moto());
        else
            obtenerMoto(params.idMoto);
    }, [])

    async function obtenerMoto(id) {
        setMoto(await getMoto(id));
    }

    const handleChange = (ev) => setMoto(prev => {
        return { ...prev, [ev.target.name]: ev.target.value }
    });

    function grabarCambios() {
        grabarMoto(moto);
        navigate("/datos/motos");
    }

    return (
        <div className="text-start col-6 offset-3 border p-3">
            <h2 className="mt-3 text-center">Datos de la moto</h2>

            <div className="mb-3 col-2">
                <label htmlFor="edId" className="form-label">Id</label>
                <input type="text" className="form-control" id="edId" name='id'
                    value={moto.id}
                    disabled
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edMarca" className="form-label">Marca</label>
                <input type="text" className="form-control" id="edMarca" name="marca"
                    value={moto.marca}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="edCilindrada" className="form-label">Cilindros</label>
                <input type="text" className="form-control" id="edCilindrada" name="cilindros"
                    value={moto.cilindros}
                    onChange={handleChange} />
            </div>

            <div className="mb-3 col-3">
                <label htmlFor="edColor" className="form-label">Color</label>
                <input type="text" className="form-control" id="edColor" name="color"
                    value={moto.color}
                    onChange={handleChange} />
            </div>

            <div className="mb-3 text-end">
                <button className="btn btn-primary me-1" onClick={grabarCambios}>Aceptar</button>
                <button className="btn btn-secondary ms-1" onClick={() => navigate(-1)}>Cancelar</button>
            </div>
        </div>
    );
};

export default MotosForm;