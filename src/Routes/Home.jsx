import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state}= useContextGlobal()
 


  const dataCard = () =>{
    let content;
    if(state.data?.status){
      content = <p>Error {state.data.status}</p>
    }else{
      content = 
        state.data?.length > 0
          ? state.data.map(dentist => <Card key={dentist.id} dentists={dentist}/>)
          : "cargando"

    }
        return content
    }

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dataCard()}
      </div>
    </main>
  )
}

export default Home