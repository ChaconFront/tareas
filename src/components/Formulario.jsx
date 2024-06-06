import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaContext from '../context/ListaContext';

const initialForm = {
    id: null,
    Tarea: "",
};

function Formulario() {
    const { setDataToEdit, dataToEdit, createData, updateData } = useContext(ListaContext);
    const [form, setForm] = useState(initialForm);
    const navigate = useNavigate();


    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }

    }, [dataToEdit])

    function haciaAtras() {
        navigate(-1)
    }

    const HandleChange = (e) => {
        //este evento actualiza los datos del formulario.
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };


    const HandleSubmit = (e) => {
        e.preventDefault();
        //comprovar que los elementos del formuario no se vallan vacios.
        if (!form.Tarea) {
            alert("datos incompletos");
            return;
        }

        else if (form.id === null) {
            console.log(form)
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    }

    const handleReset = (e) => {

        setForm(initialForm);

        setDataToEdit(null);
    }



    return (
        <div>
            <h2>Formulario</h2>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="Tarea" placeholder="Tareas" onChange={HandleChange} value={form.Tarea} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
            <button onClick={haciaAtras}>Regresar</button>
        </div>
    )
}

export default Formulario;