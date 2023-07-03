const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || null,
			message: null,
			userData:[{id:"", name:""}],
			
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

      getUserData: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/user/${id}`, {
            //method: "GET",
            // headers: {
			// 	//"Content-Type": "application/json"
            //   //Authorization: `Bearer ${store.token}`,
            // },
			//body: JSON.stringify()
          });
		  console.log(response)
		  console.log(id)
          if (response.ok) {
            const responseData = await response.json();
            console.log("User data:", responseData);
            // Actualizar el estado de la aplicación con los datos del usuario obtenidos
            setStore({ userData: responseData.userData });
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
