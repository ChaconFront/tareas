import React, { useEffect, useState } from 'react';
import { helHttp } from '../helpers/helpHttp';
import Tareas from './Tareas';



export function Lista() {
    const [lista, setLista] = useState(null)

    const api = helHttp();
    let url = "http://localhost:3000/Tareas";


    useEffect(() => {//aqui es donde traemos los datos de la peticion.
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Error al traer los datos de la peticion');
                }
                const data = await response.json();
                console.log(data);
                setLista(data)
            } catch (error) {

                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [url]);

    return (
        <div>
            <h1>Programacion de Tareas Diarias</h1>
            <section>
                {lista && <Tareas lista={lista} />}
            </section>

        </div>
    );
}

