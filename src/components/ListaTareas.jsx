import React, { useEffect, useState } from 'react';
import { helHttp } from '../helpers/helpHttp';
import Tareas from './Tareas';



export function Lista() {
    const [lista, setLista] = useState(null)

    const api = helHttp();
    let url = "http://localhost:3000/Tareas";


    useEffect(() => {//aqui es donde traemos los datos de la peticion.
        // setLoading(true);
      
            })
    }, [url]);

    return (
        <div>
            <section>
            {lista && <Tareas lista={lista} />}
            </section>
            
        </div>
    );
}

