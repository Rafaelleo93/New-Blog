const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [],
      planet: [],
      starship: [],
      filtrarItem: [],
	  favoritos: []
    },
    actions: {
      getCharacter: () => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) => setStore({ character: response.results }))
          .catch((err) => console.error(err));
      },
      getPlanet: () => {
        fetch("https://swapi.dev/api/planets", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) => setStore({ planet: response.results }))
          .catch((err) => console.error(err));
      },
      getStarship: () => {
        fetch("https://swapi.dev/api/vehicles", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) => setStore({ starship: response.results }))
          .catch((err) => console.error(err));
      },
	  addFavorite: (fav) => {
		const store = getStore();
		if (store.favoritos.includes(fav)) continued;
		else{
			setStore({
				favoritos: [fav, ...store.favoritos]
			})
		}
	  },
	  deleteFavorito: (personaje) => {
        const store = getStore();
        let newfav = store.favoritos.filter((fav) => fav.name !== personaje);
        setStore({ favoritos: newfav });
      },
    },
  };
};

export default getState;
