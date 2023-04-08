import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {  
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  const [dentist, setDentists] = useState({})
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentists(data))
  }, [url])


  return (
    <>
      <h2>Dentist {id}</h2>
      {dentist
        ? 
          <div className="card detail">
            <img src="../images/doctor.jpg" alt="" />
            <h3>{dentist?.name}</h3>
            <p>{dentist?.email}</p>
            <p>{dentist?.phone}</p>
            <p>{dentist?.username}</p>
            <p>{dentist?.website}</p>
          </div>
        : "cargando"
      }
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail