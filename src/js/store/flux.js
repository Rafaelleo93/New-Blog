const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character:[],
			planet:[],
			starship:[]
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
		  },
		};
	  };
	  
	  export default getState;