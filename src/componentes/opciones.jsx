import React, {useEffect, useState} from 'react';
import CondicionIva from "../modelo/condiciones-iva.js";
import AplicacionCreadaCon from "../modelo/aplic-creada-con.js";
import {useNavigate} from "react-router-dom";
import {getOpciones, guardarOpciones} from "../servicios/datos_opciones.js";

const Opciones = () => {
    const navigate = useNavigate();
    const [opciones, setOpciones] = useState(getOpciones());

    // useEffect(()=>setOpciones(getOpciones()), []);

    function handleChange(ev) {
        setOpciones((prev) => {
            return {...prev, [ev.target.name]: ev.target.value}
        });
    }

    function handleCheck(ev) {
        setOpciones(prev => {
            return {...prev, [ev.target.name]: ev.target.checked}
        });
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        guardarOpciones(opciones);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="col-6 offset-1 border p-3 mt-3">
                <h2>Opciones</h2>
                <div className="mt-4 mb-3">
                    <label htmlFor="edNombreEmpresa" className="form-label">Nombre empresa</label>
                    <input type="text" id="edNombreEmpresa" name="nombreEmpresa" className="form-control"
                           value={opciones.nombreEmpresa} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cbCondicionIva" className="form-label">Condicion frente al iva</label>
                    <select id="cbCondicionIva" name="condicionFrenteAlIva" className="form-select"
                            onChange={handleChange} value={opciones.condicionFrenteAlIva}>
                        <option value={CondicionIva.RI}>Responsable Inscripto
                        </option>
                        <option value={CondicionIva.Mono}>Monotributista</option>
                        <option value={CondicionIva.Exento}>Exento</option>
                    </select>
                </div>

                <div className="form-check">
                    <input type="checkbox" id="chkAgenteRetencion" name="agenteRetencion" className="form-check-input"
                           checked={opciones.agenteRetencion} onChange={handleCheck}/>
                    <label htmlFor="chkAgenteRetencion">Agente de retención</label>
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" id="chkImportador" name="importador" className="form-check-input"
                           checked={opciones.importador} onChange={handleCheck}/>
                    <label htmlFor="chkImportador">Importador</label>
                </div>

                Aplicación creada con
                <div className="border p-2 mb-3">
                    <div className="form-check">
                        <input type="radio" id="rbNoSabe" name="aplic_creada_con" className="form-check-input"
                               checked={opciones.aplic_creada_con === AplicacionCreadaCon.noSabe}
                               value={AplicacionCreadaCon.noSabe}
                               onChange={handleChange}/>
                        <label htmlFor="rbNoSabe">No sabe/No contesta</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" id="rbCra" name="aplic_creada_con" className="form-check-input"
                               checked={opciones.aplic_creada_con === AplicacionCreadaCon.cra}
                               value={AplicacionCreadaCon.cra}
                               onChange={handleChange}/>
                        <label htmlFor="rbCra">Create-react-app</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" id="rbVite" name="aplic_creada_con" className="form-check-input"
                               checked={opciones.aplic_creada_con === AplicacionCreadaCon.vite}
                               value={AplicacionCreadaCon.vite}
                               onChange={handleChange}
                        />

                        <label htmlFor="rbVite">Vite</label>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="rCalificacion">Le gusta esta aplicación?</label>
                    <input type="range" id="rCalificacion" name="calificacion" className="form-range"
                           min="1" max="10" step="1" value={opciones.calificacion} onChange={handleChange}/>
                    <div className="d-flex justify-content-between">
                        <div className="form-text">Nada</div>
                        <div className="form-text block justify-content-center">Ni fu, ni fa</div>
                        <div className="form-text">Mucho!</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <input type="submit" className="btn btn-primary" value="Aceptar" />
                    <button className="btn btn-secondary ms-3" onClick={()=>navigate(-1)} >Cancelar</button>
                </div>
            </div>

        </form>
    );
};

export default Opciones;