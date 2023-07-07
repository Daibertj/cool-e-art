const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			token: localStorage.getItem("token") || null,
			message: null,
			ilustrations: [],

			userData: JSON.parse(localStorage.getItem("userData")) || [],
			ilustrationData:
				JSON.parse(localStorage.getItem("ilustrationData")) || [],
			name: "",
			image: ""


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
					return response.status
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

					localStorage.setItem("token", data.token)
					return response.status
				} catch (error) {
					return response.status
				}
			},

			getAllIlustrations: async () => {

				const store = getStore();

				try {
					const response = await fetch(`${process.env.BACKEND_URL}/ilustrations`)
					if (response.ok) {
						const responseData = await response.json();
						setStore({ ilustrations: responseData })
					} else {

						console.log("Error fetching ilustrations:", response.status);
					}
				} catch (error) {
					console.log("Error fetching ilustrations:", error);
				}


			},

			getUserData: async () => {
				const store = getStore();
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/user`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.token}`,
						},
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
				console.log(ilustration)
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
						throw new Error("Error uploading ilustration");
					}
				} catch (error) {
					console.log("Error uploading ilustration:", error);
					return 500;
				}
			},
		},
	};
};

export default getState;
