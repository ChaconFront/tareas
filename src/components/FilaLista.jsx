import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ListaContext from '../context/ListaContext';
const Fila = ({ el}) => {
    const { id, Tarea } = el;
    const{setDataToEdit,deleteData}=useContext(ListaContext);

    return (

        <tr>
            <td>{Tarea}</td>
            <td>
                <button onClick={() => { setDataToEdit(el) }}><Link to={`/Formulario`}>editar</Link></button>
                <button  onClick={()=>{deleteData(id)}} >Eliminar</button>
            </td>
        </tr>
    );
}

export default Fila;