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
				  return response.status
		
				} catch (error) {
				  return response.status
				}
			  },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      UserData: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/user`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log("User data:", data);
            // Actualizar el estado de la aplicación con los datos del usuario obtenidos
            setStore({ userData: data });
          } else {
            
            console.log("Error fetching user data:", response.status);
            
          }
        } catch (error) {
          
          console.log("Error fetching user data:", error);
          
        }
      },

      
    },
  };
};

export default getState;
