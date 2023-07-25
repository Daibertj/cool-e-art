const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			token: localStorage.getItem("token") || null,
			userData: JSON.parse(localStorage.getItem("userData")) || [],
			ilustrationData:
				JSON.parse(localStorage.getItem("ilustrationData")) || [],
			ilustrationsUser: [],
			favoriteData:
				JSON.parse(localStorage.getItem("favoriteData")) || [],
			name: "",
			image: "",
			photos: [],
			alias: "",
			allUsersData: [],
			countFavorites: '',
			ilustrationsByCategory: [],
		},
		actions: {
			registerUser: async (user) => {

				const store = getStore()
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/user`, {
						method: "POST",
						body: user
					})

					let data = await response.json()
					return response.status

				} catch (error) {
					console.log("Error registering user:", error);
					return 500;
				}
			},

			login: async (body) => {
				const store = getStore();

				try {
					let response = await fetch(`${process.env.BACKEND_URL}/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(body),
					});

					let data = await response.json();


					if (response.ok) {
						setStore({
							token: data.token,
							name: data.name,
							alias: data.alias
						});
						localStorage.setItem("token", data.token)
						localStorage.setItem("alias", data.alias)
						getActions().getUserData()
					}


					return response.status
				} catch (error) {
					console.log("Error logging in:", error);
					return 500;
				}
			},

			getAllIlustrations: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/ilustration`)
					if (response.ok) {
						const responseData = await response.json();
						localStorage.setItem("ilustrationData", JSON.stringify(responseData));
						setStore({ ilustrationData: responseData })
						return responseData
					} else {
						console.log("Error fetching ilustrations:", response.status);
					}
				} catch (error) {
					console.log("Error fetching ilustrations:", error);
				}
			},

			getIlustrationsByCategory: (category)=> {
				const store = getStore();
				if (category != ""){
					let ilustrations= store.ilustrationData.filter(ilustration=> ilustration.category == category)
					setStore({ilustrationsByCategory: ilustrations})
				}else{
					setStore({ilustrationsByCategory: store.ilustrationData})
				}
				
			},

			getUserData: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/user/by-alias`, {
						method: "GET",
						headers: {
							"Content-Type": "aplication/json",
							"Authorization": `Bearer ${store.token}`
						}
					});
					if (response.ok) {
						const responseData = await response.json();
						console.log("User data:", responseData);
						setStore({ userData: responseData });
						localStorage.setItem("userData", JSON.stringify(responseData));
					} else {
						console.log("Error fetching user data:", response.status);
					}
				} catch (error) {
					console.log("Error fetching user data:", error);
				}
			},

			uploadIlustration: async (ilustration) => {
				const store = getStore();

				try {
					let response = await fetch(`${process.env.BACKEND_URL}/ilustration`, {
						method: "POST",
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
						body: ilustration,
					});
					if (response.ok) {
						// let data = await response.json();
						return response;
					} else {
						throw new Error("Error uploading ilustration")
					}
				} catch (error) {
					console.log("Error uploading ilustration:", error)
					return 500
				}
			},

			getIlustrationsByUser: async (alias) => {
				const store = getStore()
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/ilustration/user/${alias}`)
					if (response.ok) {
						const responseData = await response.json()
						setStore({ ilustrationsUser: responseData })
						console.log("User ilustrations:", responseData)
					} else {
						console.log("Error fetching user ilustrations:", response.status)
					}
				} catch (error) {
					console.log("Error getting user ilustrations:", error)
					return 500;
				}
			},

			logout: () => {
				localStorage.removeItem("token")
				localStorage.removeItem("userData")
				localStorage.removeItem("alias")
				localStorage.removeItem("favoriteData")
				localStorage.removeItem("ilustrationData")
				setStore({ token: null, name: "", image: "" })
			},

			addFavorite: async (id) => {
				const store = getStore();
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/favorite/${id}`, {
						method: "POST",
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
						body: [],
					});
					if (response.ok) {
						getActions().getFavorite()
						return response;
					} else {
						throw new Error("Error");
					}
				} catch (error) {
					console.log("Error", error);
					return 500;
				}
			},

			getApiImage: async () => {
				try {
					const response = await fetch(`https://api.pexels.com/v1/curated?page=2&per_page=12`, {
						method: "GET",
						headers: {
							Authorization: `${process.env.API_KEY_PEXEL}`,
						},
					})
					if (response.ok) {
						const data = await response.json();
						setStore({ photos: data.photos })
					}
				} catch (error) {
					console.log(error)
				}
			},

			getFavorite: async () => {
				const store = getStore();
				const token = store.token;
				const userData = store.userData;
				if (!token || !userData) {
					return;
				}
				const user_id = userData.id;
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/favorite`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					if (response.ok) {
						const responseData = await response.json();
						localStorage.setItem("favoriteData", JSON.stringify(responseData));
						setStore({ favoriteData: responseData });
						console.log("favorite added", favoriteData)
					} else {
						console.log("Error fetching favorites:", response.status);
					}
				} catch (error) {
					console.log("Error fetching favorites:", error);
				}
			},

			deleteFavorite: async (ilustration_id) => {
				const store = getStore()
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/favorite/${ilustration_id}`, {
						method: "DELETE",
						headers: {
							Authorization: `Bearer ${store.token}`,
						}
					})
					console.log("delete favorite", response)
					if (response.ok) {
						getActions().getFavorite()
					} else {
						console.log("favorite not deleted")
					}
				} catch (err) {
					console.log("error deleting favorite", err)
				}
			},

			getAllUsers: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/user`, {
						method: 'GET',
						headers: { 'Content-Type': 'application/json' }
					});
					if (response.ok) {
						const responseData = await response.json()
						setStore({ allUsersData: responseData })
					} else {
						console.log("Error Fetching all users:", response.status)
					}
				} catch (error) {
					console.log("Error Fetching all users:", error)
				}
			},

			deleteIlustration: async (ilustration_id, alias) => {
				const store = getStore()
				console.log(alias)
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/ilustration/${ilustration_id}`, {
						method: "DELETE",
						headers: {
							Authorization: `Bearer ${store.token}`,
						}
					})
					console.log("deleteIlustration", response)
					if (response.ok) {
						getActions().getFavorite()
						getActions().getIlustrationsByUser(alias)
					} else {
						console.log("erorr deleting Ilustration")
					}
				} catch (err) {
					console.log("Error deleting ilustration:", err)
				}
			},

			updateUser: async (user) => {
				const store = getStore()
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/user`, {
						method: 'PUT',
						headers: {
							Authorization: `Bearer ${store.token}`
						},
						body: user
					})
					if (response.ok) {
						console.log("se actualizo usuario")
						getActions().getUserData()
						return response.status
					} else {
						console.log("Error updating social media")
						return response.status
					}
				} catch (error) {
					console.log("Error updating user: ", error)
				}
			},

			getCountAllFavorites: async () => {
				const store = getStore()
				//actualiza las ilustraciones antes de contar los favoritos
				const response = await fetch(`${process.env.BACKEND_URL}/favorites/all`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${store.token}`,
					}
				})
				try {
					if (response.ok) {
						const allFavotites = await response.json()
						const ilustrationCount = {}
						allFavotites.forEach((favorite) => {
							const ilustrationId = favorite.ilustration_id
							// revisa si ya esta el objeto contiene tiene algo y le suma 1, sino lo coloca en 0 y le suma 1
							ilustrationCount[ilustrationId] = (ilustrationCount[ilustrationId] || 0) + 1
						})
						// Ordena el objeto ilustrationCount en orden descendente según la cantidad de favoritos que son los keys
						const sortedIlustration = Object.keys(ilustrationCount).sort((a, b) => ilustrationCount[b] - ilustrationCount[a])
						// Toma solo los primeros 6 elementos del objeto, con map se crea un nuevo array donde cada elemento es otro array de dos elementos
						const top6Favorites = sortedIlustration.slice(0, 6).map((ilustrationId) => [ilustrationId, ilustrationCount[ilustrationId]])
						setStore({ countFavorites: top6Favorites })
					} else {
						console.log('error getting all favorites')
					}
				} catch (error) {
					console.log('Error fetching all favorites:', error)
				}
			}
		},
	};
};

export default getState;