import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

//estilos para los botones 
export const Button = styled.button`
background-color: #3389e5;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  margin-top: 15px;

  &:hover {
    background-color: rgb(26, 73, 144);
  }
`
//estilos del main.
export const StyleMain = styled.main`
    background-color: #5cabdd;
    display: block;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
//estilos para los link 
export const StyleLikn = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
`

//estilo para la seccion.
export const StyleSection = styled.section`
height: auto;
width: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const StyleTable = styled.table`
  border-collapse: collapse;
  border: 1px solid  #dddddd;;
  width: 100%;
  border-radius: 10px;
`

export const StyledTh = styled.th`
  padding: 8px;
  
  border-bottom: 1px solid #ddd;
  

`

export const StyledTd = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;

`


export const StyledTr = styled.tr`


`

//estilo para boton agregar

export const StyleButon = styled.button`
background-color: #33e548;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: rgb(51, 189, 88);
  }

`

export const StyleButonEliminar = styled.button`
background-color: #b11409;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease-out;
  color: white;
  font-weight: bolder;
  font-size: 15px;
  

  &:hover {
    background-color: rgb(217, 78, 80);
  }
`

