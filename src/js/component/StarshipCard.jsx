import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const StarshipCard = () => {
  const { store, actions } = useContext(Context);
  let starshipsArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  let starshipImg = starshipsArray.map(
    (id) =>
      "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
  );

  return (
    <div className="container">
      <div className="col-12">
        <h3 className="title">
          <b>Starships:</b>
        </h3>
        <div className="d-flex overflow-auto">
          {store.starship.map((starship, i) => (
            <div className="card m-1">
              <img
                src={starshipImg[i]}
                className="card-img-top starshipImg"
                alt="starshipImg"
              />
              <div className="card-body">
                <b className="sub-title">{starship.name || "n/a"}</b>
                <p className="card-text">
                  Model: <em>{starship.model || "n/a"}</em>
                </p>
                <p className="card-text">
                  Lenght: <em>{starship.length || "n/a"}</em>
                </p>
                <p className="card-text">
                  Class: <em>{starship.vehicle_class || "n/a"}</em>
                </p>
              </div>
              <div>
                <Link to={`/vehicles/${i}`}>
                  <button className="btn btn-primary">More!</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarshipCard;
