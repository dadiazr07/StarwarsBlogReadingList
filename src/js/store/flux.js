const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charData: [],
			planetData: [],
			starshipsData: [],
			currentInfo: {},
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getCharacters: async () => {
				const store = getStore()
				const API_URL = 'https://www.swapi.tech/api'
				let people = []
				try {
					const respuesta = await fetch(`${API_URL}/people`,{})
					const data = await respuesta.json()
					people = data.results
				} catch (error) {
					console.log(error)
				}
				setStore({charData: people})
			},

			getPlanets: async () => {
				const store = getStore()
				const API_URL = 'https://www.swapi.tech/api'
				let planets = []
				try {
					const respuesta = await fetch(`${API_URL}/planets`,{})
					const data = await respuesta.json()
					planets = data.results
				} catch (error) {
					console.log(error)
				}
				setStore({planetData: planets})
			},

			getStarships: async () => {
				const store = getStore()
				const API_URL = 'https://www.swapi.tech/api'
				let starships = []
				try {
					const respuesta = await fetch(`${API_URL}/starships`,{})
					const data = await respuesta.json()
					starships = data.results
				} catch (error) {
					console.log(error)
				}
				setStore({starshipsData: starships})
			},

			getINFO: async (params) => {
				const store = getStore()
				const API_URL = 'https://www.swapi.tech/api'
				let info = {}
				try {
					const respuesta = await fetch(`${API_URL}/${params.endpoint}/${params.theid}`)
					const data = await respuesta.json()
					info = data.result.properties
				} catch (error) {
					console.log(error)
				}
				setStore({currentInfo: info})
			},

			cleanInfo: () => {
				const store = getStore()
				setStore({currentInfo: {}})
			},

			addtoFav: (id) => {
				const store = getStore()
				const addchar = store.charData.filter(item => item.id === id);
				const addplan = store.charData.filter(item => item.id === id);
				const addstsp = store.charData.filter(item => item.id === id);
				
				const auxFav = addchar.concat(addplan, addstsp)
				console.log(auxFav)
				const newFav = auxFav.filter(item => item !== undefined)

				setStore({ favorites: [...store.favorites, newFav]})
				console.log(store.favorites)
			},
		}
	};
};

export default getState;
