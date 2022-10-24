import React, { useEffect, useState } from 'react';
import Bici from '../../modelo/bici';
import { useNavigate, useParams } from 'react-router-dom';
import { getBici, grabarBici } from '../../servicios/datos_bicis,';

const BicisForm = () => {
    const [bici, setBici] = useState(null);
    const params = useParams();
    const idBici = Number(params.idBici);
    const navigate = useNavigate();

    const obtenerBici = async (idBici) => {
        setBici(await getBici(idBici));
    }

    const handleEdits = (ev) => {
        const value = ev.target.value;
        setBici(prev => {
            return {...prev, [ev.target.id]: value}
        });
    };

    function aceptarCambios() {
        grabarBici(bici);
        navigate("/datos/bicicletas");
    }

    useEffect(() => {
        if (idBici < 0)
            setBici(new Bici());
        else
           obtenerBici(idBici)
    }, []);

    if (!bici) return <h2 className='text-center'>Bici no encontrada</h2>;

    return (
        <div className="text-start col-6 offset-3 border p-3">
            <h2 className="mt-3 text-center">Datos de la Bici</h2>
            <div className="mb-3 col-2">
                <label htmlFor="id" className="form-label">Id</label>
                <input type="text" className="form-control" id="id" value={bici.id} onChange={handleEdits}
                       readOnly={true} disabled/>
            </div>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input type="text" className="form-control" id="marca" value={bici.marca} onChange={handleEdits}/>
            </div>
            <div className="mb-3">
                <label htmlFor="rodado" className="form-label">Rodado</label>
                <input type="text" className="form-control" id="rodado" value={bici.rodado} onChange={handleEdits}/>
            </div>
            <div className="mb-3 col-2">
                <label htmlFor="anio" className="form-label">Año</label>
                <input type="text" className="form-control" id="anio" value={bici.anio} onChange={handleEdits}/>
            </div>
            <div className="mb-3 text-end">
                <button className="btn btn-primary me-1" onClick={aceptarCambios}>Aceptar</button>
                <button className="btn btn-secondary ms-1" onClick={() => navigate(-1)}>Cancelar</button>
            </div>
        </div>
    );
};

export default BicisForm;