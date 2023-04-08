import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favs=localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs)
  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {parsedFavs.length > 0
          ? favs.map(fav => <Card key={fav.id} dentists={fav}/>)
          : <p>You haven't added any favorites yet</p>
        }
      </div>
    </>
  );
};

export default Favs;
