import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultApiAction } from "../actions/consultApiAction";


const ListConsult = () => {

    const dispatch = useDispatch();
    const [ currentPage, setCurrentPage ] = useState(0);
    useEffect(() => {
        const consult = () => dispatch(consultApiAction());
        consult();
    }, []);

    const listadoDatos = useSelector( state => state.results.results);

    const flietDataList = () => {
        return listadoDatos.slice(currentPage, currentPage + 10);
    }

    const nextPage = () => {
        if(currentPage < listadoDatos.length) 
             setCurrentPage( currentPage + 10 );
    }

    const prevPage = () => {
        if(currentPage > 0 ) 
            setCurrentPage( currentPage - 10 );
    }

    const firstPage = () => {
        setCurrentPage(0);
    }

    const lastPage = () => {
        setCurrentPage( listadoDatos.length - 1);
    }
    
    return (
        <>
            <h1>Componente de Consuta</h1>
            <table>
                <thead>
                    <tr>
                        <th>City ID</th>
                        <th>Nombre Ciudad</th>
                        <th>Nombre Estado</th>
                        <th>Probabilidad de Precipitacion</th>
                        <th>Relativehu Midity</th>
                        <th>Lastreporttime</th>
                        <th>LLueve </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                       listadoDatos.length === 0 
                         ? 
                            <p>No hay Datos por Mostrar</p>
                         :
                         flietDataList().map(  element => {
                            return (
                                <tr>
                                    <td>{element.cityid}</td>
                                    <td>{element.name}</td>
                                    <td>{element.state}</td>
                                    <td>{element.probabilityofprecip}</td>
                                    <td>{element.relativehumidity}</td>
                                    <td>{element.probabilityofprecip >= 60 ? <p>Si se cumple</p> : <p>No se cumple</p>}</td>
                                </tr>
                            )
                         })
                    }
                </tbody>
            </table>
            <div>
                <button onClick={firstPage} value="<<">Inicio</button>
                <button onClick={prevPage} value="<">Anterior</button>
                <button onClick={nextPage} value=">">Siguiente</button>
                <button onClick={lastPage} value=">>">Ultimo</button>
            </div>

        </>
    )
}

export default ListConsult;