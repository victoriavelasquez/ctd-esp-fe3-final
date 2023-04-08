import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [user, setUser] = useState ({
        nombre: '',
        email: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit  = (event) => {
        event.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        let emailTest = emailRegex.test(user.email)
        if (emailTest && user.nombre.length > 5 ){  

            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }

        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <label>Nombre Completo</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Email</label>
            <input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            
            <button>Enviar</button>
      </form>
      {err && <h3>Por favor verifica tu información</h3>}
      {show && <h2>Gracias {user.nombre},nos comunicaremos via email</h2>}
    </div>
  );
};

export default Form;
