import React from 'react'

const Fila = (el) => {
    const { id, Tarea } = el;
    return (

        <tr>
            <td>{id}</td>
            <td>{Tarea}</td>
            <td>
                <button >Editar</button>
                <button >Eliminar</button>
            </td>
        </tr>
    );
}

export default Fila;