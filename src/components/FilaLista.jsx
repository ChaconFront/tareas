import React from 'react'
import { Link } from 'react-router-dom';
const Fila = ({ el, setDataToEdit,deleteData }) => {
    const { id, Tarea } = el;
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