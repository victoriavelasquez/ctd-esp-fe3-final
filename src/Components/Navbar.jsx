import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContextGlobal()
  const changeTheme = () =>{
    !localStorage.getItem('theme') && localStorage.setItem('theme', state.theme)
    localStorage.getItem('theme') === 'light'
      ? dispatch({type: localStorage.getItem('theme'), payload: 'dark'})
      : dispatch({type: localStorage.getItem('theme'), payload: 'light'})
  }


  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      <Link to='/contact'><h3>Contacto</h3></Link>
      <Link to='/Detail'><h3>Detail</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme </button>
    </nav>
  )
}

export default Navbar