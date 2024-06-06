import React, { useContext } from 'react';
import Fila from './FilaLista';
import ListaContext from '../context/ListaContext';

const Tareas = () => {
    const{lista}=useContext(ListaContext);
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>

                        <th>Tareas</th>
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