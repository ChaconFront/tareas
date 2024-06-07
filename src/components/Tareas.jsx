import React, { useContext } from 'react';
import Fila from './FilaLista';
import ListaContext from '../context/ListaContext';
import { StyleTable, StyledTh, StyledTr } from '../styled/StyledComponent';
const Tareas = () => {
    const { lista } = useContext(ListaContext);
    return (
            <StyleTable>
                <thead>
                    <StyledTr>
                        <StyledTh>Tareas</StyledTh>
                        <StyledTh>Acciones</StyledTh>
                    </StyledTr>
                </thead>
                <tbody>
                    {(lista.map((el) => <Fila key={el.id} el={el} />))}
                </tbody>
            </StyleTable>
    );
}

export default Tareas;