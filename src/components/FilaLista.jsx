import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ListaContext from '../context/ListaContext';
import { StyleButon, StyleButonEliminar, StyleLikn, StyledTd } from '../styled/StyledComponent';
const Fila = ({ el}) => {
    const { id, Tarea } = el;
    const{setDataToEdit,deleteData}=useContext(ListaContext);

    return (

        <tr>
            <StyledTd>{Tarea}</StyledTd>
            <StyledTd>
                <StyleButon onClick={() => { setDataToEdit(el) }}><StyleLikn to={`/Formulario`}>Editar</StyleLikn></StyleButon>
                <StyleButonEliminar  onClick={()=>{deleteData(id)}} >Eliminar</StyleButonEliminar>
            </StyledTd>
        </tr>
    );
}

export default Fila;