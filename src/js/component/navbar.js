import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsFillXCircleFill, BsHeartFill } from "react-icons/bs";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <div className="logo">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img
              className="logo"
              src="https://www.wallpaperflare.com/static/929/720/1006/star-wars-general-grievous-star-wars-wallpaper-preview.jpg"
            />
          </a>
        </Link>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <button
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsHeartFill style={{color: 'yellow', fontSize: '20px'}} />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li className="text-white mx-2 my-1 text-center">Favorites</li>
            {store.favoritos && store.favoritos.length ? (
              store.favoritos.map((fav, i) => (
                <div key={i} className="container">
                  <li className="dropdown-item d-flex align-items-center ">
                    <div className="col-10">
                      <Link
                        to={`/people/${fav.id}`}
                        className="text-decoration-none text-white"
                      >
                        {fav.name}
                      </Link>
                    </div>

                    <button
                      className="btn-warning col align-self-end rounded"
                      onClick={() => {
                        actions.deleteFavorito(fav.name);
                      }}
                    >
                      ❌
                    </button>
                  </li>
                </div>
              ))
            ) : (
              <li className="dropdown-item"></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
