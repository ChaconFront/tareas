import React from 'react';
import Fila from './FilaLista';

const Tareas = ({ lista }) => {

    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {(lista.map((el) => <Fila key={el.id} el={el} />))}
                </tbody>
            </table>
        </div>
    );
}

export default Tareas;