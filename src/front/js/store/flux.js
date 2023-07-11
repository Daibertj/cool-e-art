const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			token: localStorage.getItem("token") || null,
			userData: JSON.parse(localStorage.getItem("userData")) || [],
			ilustrationData:
				JSON.parse(localStorage.getItem("ilustrationData")) || [],
			ilustrationsUser: []


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
					});

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
						console.log("ilustration data:", responseData)
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
					const response = await fetch(`${process.env.BACKEND_URL}/user/${alias}`, {
						method: "GET",
					});
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
					console.log("User ilustrations:", responseData)
				  } else {
					console.log("Error fetching user ilustrations:", response.status)
				  }
				} catch (error) {
				  console.log("Error getting user ilustrations:", error)
				  return 500;
				}
			  }




		},
	};
};

export default getState;
