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
			username: "",
			image: "",
			photos: []


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
					setStore({
						token: data.token,
						username: data.alias
					});
					console.log(username)
					if (response.ok) {
						getActions().getUserData()
					}

					localStorage.setItem("token", data.token)
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
						// console.log("ilustration data:", responseData)
						setStore({ ilustrationData: responseData })
					} else {
						console.log("Error fetching ilustrations:", response.status);
					}
				} catch (error) {
					console.log("Error fetching ilustrations:", error);
				}
			},

			getUserData: async (alias) => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/user/${alias}`);
					if (response.ok) {
						const responseData = await response.json();
						 console.log("User data:", responseData);

						localStorage.setItem("userData", JSON.stringify(responseData));

						setStore({ userData: responseData });
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
					// console.log("User ilustrations:", responseData)
				  } else {
					console.log("Error fetching user ilustrations:", response.status)
				  }
				} catch (error) {
				  console.log("Error getting user ilustrations:", error)
				  return 500;
				}
			  },



			logout: ()=> {
				localStorage.removeItem("token")
				setStore({token: null, name: "", image:""})			
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
					const response = await fetch(`https://api.pexels.com/v1/curated?page=2&per_page=10`, {
						method: "GET",
						headers: {

							Authorization: `${process.env.API_KEY_PEXEL}`,
						},
					})
					if (response.ok){
						const data = await response.json();
						setStore({photos: data.photos})
					}

				} catch (error) {
					console.log(error)
				}
			},
			
			getFavorite: async () => {

				const store = getStore();

				try {
					const response = await fetch(`${process.env.BACKEND_URL}/favorite/1`)
					if (response.ok) {
						const responseData = await response.json();
						localStorage.setItem("favoriteData", JSON.stringify(responseData));
						console.log("favorite data:", responseData)
						setStore({ favoriteData: responseData })
					} else {

						console.log("Error fetching favorite:", response.status);
					}
				} catch (error) {
					console.log("Error fetching favorite:", error);
				}


			},
			deleteFavorite: async (ilustration_id) => {
				const store = getStore()
				try{
					let response = await fetch(`${process.env.BACKEND_URL}/favorite/${ilustration_id}`, {
						method:"DELETE",
						headers: {

							Authorization: `Bearer ${store.token}`,
						}
					})
					
					console.log(response)
		
					if (response.ok){
						getActions().getContact()
					}else{
						console.log("errorrrrr")
					}
		
		
		
				}catch(err){
					console.log(err)
				}
		
			},


		},
	};
};

export default getState;
