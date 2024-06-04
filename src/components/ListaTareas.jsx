import React, { useEffect} from 'react';
import Tareas from './Tareas';
import { Link } from 'react-router-dom';

export function Lista({ lista, setLista, setDataToEdit,deleteData,error }) {
    let url = "http://localhost:3000/Tareas";
    useEffect(() => {//aqui es donde traemos los datos de la peticion.
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
                    {lista && <Tareas lista={lista} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
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

