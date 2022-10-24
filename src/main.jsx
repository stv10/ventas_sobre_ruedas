import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Datos from "./componentes/datos.jsx";
import Opciones from "./componentes/opciones.jsx";
import AutosLista from "./componentes/autos/autos-lista.jsx";
import MotosLista from "./componentes/motos/motos-lista.jsx";
import BicisLista from "./componentes/bicis/bicis-lista.jsx";
import BicisForm from './componentes/bicis/bicis-form.jsx';
import Home from "./componentes/home.jsx";
import AcercaDe from "./componentes/acercade.jsx";
import AutosForm from "./componentes/autos/autos-form";
import MotosForm from './componentes/motos/motos-form';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="opciones" element={<Opciones/>}/>
                    <Route path="datos" element={<Datos/>}>
                        <Route path="autos" element={<AutosLista/>}/>
                        <Route path="autos/:idAuto" element={<AutosForm />} />

                        <Route path="motos" element={<MotosLista/>}/>
                        <Route path="motos/:idMoto" element={<MotosForm />} />

                        <Route path="bicicletas" element={<BicisLista/>}/>
                        <Route path="bicicletas/:idBici" element={<BicisForm/>}/>
                    </Route>
                    <Route path="acerca" element={<AcercaDe/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
