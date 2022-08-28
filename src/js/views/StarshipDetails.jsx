import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const StarshipDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let starshipsArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  let starshipImg = starshipsArray.map(
    (id) =>
      "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
  );

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <img src={starshipImg[params.id]} />
        </div>
        <div className="col">
          <p>
            Nos encontramos en un periodo de guerra civil. Las naves espaciales
            rebeldes, atacando desde una base oculta, han logrado su primera
            victoria contra el malvado Imperio Galáctico. Durante la batalla,
            los espías rebeldes han conseguido apoderarse de los planos secretos
            del arma total y definitiva del Imperio, la ESTRELLA DE LA MUERTE,
            una estación espacial acorazada, llevando en sí potencia suficiente
            para destruir a un planeta entero. Perseguida por los siniestros
            agentes del Imperio, la Princesa Leia vuela hacia su patria, a bordo
            de su nave espacial, llevando consigo los planos robados, que pueden
            salvar a su pueblo y devolver la libertad a la galaxia....
          </p>
        </div>
      </div>
      <div className="container row border-top border-danger mt-4 text-capitalize">
        <div className="col-2 text-danger text-center">
          <b>Name:</b>
          <p><em>{store.starship[params.id].name}</em></p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Manufacturer:</b>
          <p><em>{store.starship[params.id].manufacturer}</em></p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Const in credits:</b>
          <p><em>{store.starship[params.id].gencost_in_creditsder}</em></p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Max. Atmosphering speed:</b>
          <p><em>{store.starship[params.id].max_atmosphering_speed}</em></p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Crew:</b>
          <p><em>{store.starship[params.id].crew}</em></p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Passengers:</b>
          <p><em>{store.starship[params.id].passengers}</em></p>
        </div>
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};

export default StarshipDetails;
