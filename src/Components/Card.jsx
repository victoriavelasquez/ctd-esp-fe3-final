import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({dentists}) => {
  const { name, username, id } = dentists
    
      // Aqui iria la logica para agregar la Card en el localStorage
      const { state, dispatch } = useContextGlobal();
      const favs = state.favs;
      const isfav = favs.find(fav => fav.id === id);

      const addFav = () => {
        dispatch({ type: "addFav", payload: dentists });
      };
      const removeFav = () => {
        dispatch({ type: "removeFav", payload: dentists });
      };

      return (
        <div className="card">
          {/* En cada card deberan mostrar en name - username y el id */}
          <Link to={"/detail/" + id}>
            <img src="/images/doctor.jpg" alt="" />
            <h3>{name}</h3>
            <p>{username}</p>
          </Link>
          {!isfav
            ? <button onClick={addFav} className="favButton">Add fav ⭐️</button>
            : <button onClick={removeFav} className="favButton">Remove fav ❌</button>}

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        </div>
      );
    };

    export default Card;
  
