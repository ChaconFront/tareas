import React, { useContext, useEffect } from 'react';
import Tareas from './Tareas';
import { Link } from 'react-router-dom';
import ListaContext from '../context/ListaContext';
import { Message } from './message';

export function Lista() {
    const { lista, setLista, error } = useContext(ListaContext);

    let url = "http://localhost:3000/Tareas";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al traer los datos de la peticion');
                }
                const data = await response.json();
                setLista(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [url]);

    return (
        <main>
            <h1>Programacion de Tareas Diarias</h1>
            <section>
                <div>
                    {lista && <Tareas />}
                </div>
                <div>
                    {error && <Message msg={`Error ${error.status}: ${error.statusText} `} bgColor="#dc3545" />}
                </div>
                <div>
                    <button>
                        <Link to={`/Formulario`}>Agregar</Link>
                    </button>
                </div>

            </section>



        </main>
    );
}

