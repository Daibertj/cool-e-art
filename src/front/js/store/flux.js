const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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
		
		
				} catch (error) {
				  return response.status
				}
			  },

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			fetchUserData: async () => {
				const store = getStore();
				try {
				  const response = await fetch(`${process.env.BACKEND_URL}/user-data`, {
					method: "GET",
					headers: {
					  Authorization: `Bearer ${store.token}` // Si es necesario enviar el token en la cabecera
					}
				  });
		
				  if (response.ok) {
					
					const data = await response.json();
					console.log("User data:", data);
					// Actualizar el estado de la aplicación con los datos del usuario obtenidos
					setStore({ userData: data });
				  } else {
					// Hubo un error en la solicitud
					console.log("Error fetching user data:", response.status);
					// Realizar cualquier acción adicional en caso de error
				  }
				} catch (error) {
				  // Hubo un error en la comunicación con el servidor
				  console.log("Error fetching user data:", error);
				  // Realizar cualquier acción adicional en caso de error
				}
			  },

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			
		}
	};
};

export default getState;
