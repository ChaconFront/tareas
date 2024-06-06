import React, { createContext, useState } from "react";
import { helHttp } from "../helpers/helpHttp";

const ListaContext = createContext();

//ahora vamos a crear el provaider
const ListaProvaider=({children})=>{
    const [lista, setLista] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);

    const api = helHttp();
    let url = "http://localhost:3000/Tareas";

   
  function createData(data) {
    data.id = JSON.stringify(Date.now());
    let options = {
      body: data,
      headers: { "Content-type": "application/json" }
    }
    api.post(url, options).then((res) => {
      //console.log(res)
      if (!res.err) {
        setLista([...lista, res]);
      }
      else {
        setError(res);
      }
    })
  };


  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    let options = {
      body: data,
      headers: { "Content-Type": "application/json" }
    }
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = lista.map((el) => (el.id === data.id ? data : el));
        setLista(newData);
      }
      else {
        setError(res);
      }
    })
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id '${id}'?`);

    if (isDelete) {
      let endpoint = `${url}/${id}`
      let options = {
        headers: { "Content-Type": "application/json" }
      }
      api.del(endpoint, options).then(res => {
        if (!res.err) {
          let newData = lista.filter(el => el.id !== id);
          setLista(newData);
        }
        else {
          setError(res);
        }
      })

    } else {
      return;
    }
  };

    
    const data={lista,setLista,dataToEdit,setDataToEdit,error,setError,createData,updateData,deleteData}
    
    return <ListaContext.Provider value={data}>{children}</ListaContext.Provider>
}


export { ListaProvaider }
export default ListaContext;