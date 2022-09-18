import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <img
            src={
              params.id == 1
                ? `https://starwars-visualguide.com/assets/img/placeholder.jpg`
                : `https://starwars-visualguide.com/assets/img/planets/${parseInt(
                    params.id
                  )}.jpg`
            }
            alt="jediInfoFace"
          />
        </div>
        <div className="col">
          <p className="text-white">
            En el Senado Galáctico. reina la inquietud. Varios miles de sistemas
            solares han declarado su intención de abandonar la República. Este
            movimiento separatista, liderado por el misterioso Conde Dooku, ha
            provocado que al limitado número de Caballeros Jedi les resulte
            difícil mantener la paz y el orden en la galaxia. La senadora
            Amidala, la antigua reina de Naboo, regresa al Senado Galáctico para
            dar su voto en la crítica cuestión de crear un EJÉRCITO DE LA
            REPÚBLICA que ayude a los desbordados Jedi…
          </p>
        </div>
      </div>
      <div className="container row border-top border-danger mt-4 text-capitalize">
        <div className="col-2 text-danger text-center">
          <b>Name:</b>
          <p>
            <em>{store.planet[params.id - 1].name}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Rotation period:</b>
          <p>
            <em>{store.planet[params.id - 1].rotation_period}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Orbital period:</b>
          <p>
            <em>{store.planet[params.id - 1].orbital_period}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Diameter:</b>
          <p>
            <em>{store.planet[params.id - 1].diameter}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Climate:</b>
          <p>
            <em>{store.planet[params.id - 1].climate}</em>
          </p>
        </div>
        <div className="col-2 text-danger text-center">
          <b>Gravity:</b>
          <p>
            <em>{store.planet[params.id - 1].gravity}</em>
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

export default PlanetDetails;
