import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              parseInt(params.id) + 1
            }.jpg`}
            alt="characterImg"
          />
        </div>
        <div className="col">
          <p className="text-white">
            La República Galáctica está sumida en el caos. Los impuestos de las
            rutas comerciales a los sistemas estelares exteriores están en
            disputa. Esperando resolver el asunto con un bloqueo de poderosas
            naves de guerra, la codiciosa Federación de Comercio ha detenido
            todos los envíos al pequeño planeta de Naboo. Mientras el Congreso
            de la República debate interminablemente esta alarmante cadena de
            acontecimientos, el Canciller Supremo ha enviado en secreto a dos
            Caballeros Jedi, guardianes de la paz y la justicia en la galaxia,
            para resolver el conflicto....
          </p>
        </div>
      </div>
      <div className="container row border-top border-danger mt-4 text-capitalize">
        <div className="col-2 text-danger text-center">
          <b>Name:</b>
          <p>
            <em>{store.character[params.id].name}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Birth year:</b>
          <p>
            <em>{store.character[params.id].birth_year}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Gender:</b>
          <p>
            <em>{store.character[params.id].gender}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Height:</b>
          <p>
            <em>{store.character[params.id].height}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Skin color:</b>
          <p>
            <em>{store.character[params.id].skin_color}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Eye color:</b>
          <p>
            <em>{store.character[params.id].eye_color}</em>
          </p>
        </div>
      </div>
      <br />
      <Link to="/">
        <button className="btn back">Back home</button>
      </Link>
    </div>
  );
};

export default CharacterDetails;
