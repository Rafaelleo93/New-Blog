import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const StarshipCard = () => {
  const { store, actions } = useContext(Context);
  let starshipsArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  let starshipImg = starshipsArray.map(
    (id) =>
      "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
  );

  return (
    <div className="container">
      <div className="col-12 mt-2">
        <h3 className="title">
          <b>Starships:</b>
        </h3>
        <div className="d-flex overflow-auto p-4">
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
              <div className="d-flex p-3">
              <div>
                <Link to={`/vehicles/${i}`}>
                  <button className="btn more">More!</button>
                </Link>
              </div>
              <div>
              <button 
              type="button"
              className="btn like"
              onClick={()=> {actions.addFavorite(starship)}}>
                {store.favoritos.includes(starship) ? <BsHeartFill style={{color: 'yellow', fontSize: '20px'}}/> : <BsHeart style={{color: 'yellow', fontSize: '20px'}} />}
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

export default StarshipCard;
