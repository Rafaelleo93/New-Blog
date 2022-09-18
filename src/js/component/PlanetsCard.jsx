import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const PlanetsCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="col-12 mt-2">
        <h3 className="title">
          <b>Planets:</b>
        </h3>
        <div className="d-flex overflow-auto p-4">
          {store.planet.map((planet, i) => (
            <div className="card m-1">
              <img
                src={
                  i == 0
                    ? `https://starwars-visualguide.com/assets/img/placeholder.jpg`
                    : `https://starwars-visualguide.com/assets/img/planets/${
                        i + 1
                      }.jpg`
                }
                className="card-img-top planetsImg"
                alt="PlanetsFace"
              />
              <div className="card-body">
                <b className="sub-title">{planet.name || "n/a"}</b>
                <p className="card-text">
                  Population: <em>{planet.population || "n/a"}</em>
                </p>
                <p className="card-text">
                  Terrain: <em>{planet.terrain || "n/a"}</em>
                </p>
              </div>
              <div className="d-flex p-3">
                <div>
                  <Link to={`/planets/${i + 1}`}>
                    <button className="btn more">More!</button>
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn like"
                    onClick={() => {
                      actions.addFavorite(planet);
                    }}
                  >
                    {store.favoritos.includes(planet) ? (
                      <BsHeartFill
                        style={{ color: "yellow", fontSize: "20px" }}
                      />
                    ) : (
                      <BsHeart style={{ color: "yellow", fontSize: "20px" }} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetsCard;
