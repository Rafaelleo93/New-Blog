import React, { useContext } from "react";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const CharacterCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="col-12 my-2">
        <h3 className="title">
          <b>Characters:</b>
        </h3>
        <div className="d-flex overflow-auto p-4">
          {store.character.map((character, i) => (
            <div className="card m-1">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  i + 1
                }.jpg`}
                className="card-img-top characterImg "
                alt="characterImg"
              />
              <div className="card-body">
                <b className="sub-title">{character.name || "n/a"}</b>
                <p className="card-text">
                  Gender: <em>{character.gender || "n/a"}</em>
                </p>
                <p className="card-text">
                  Hair Color: <em>{character.hair_color || "n/a"}</em>
                </p>
                <p className="card-text">
                  Eye Color:<em>{character.eye_color || "n/a"}</em>
                </p>
              </div>
              <div className="d-flex p-3">
                <div>
                  <Link to={`/people/${i}`}>
                    <button className="btn more">More!</button>
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn like "
                    onClick={() => {
                      actions.addFavorite(character);
                    }}
                  >
                    {store.favoritos.includes(character) ? (
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

export default CharacterCard;
