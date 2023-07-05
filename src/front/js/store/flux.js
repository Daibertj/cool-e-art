const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || null,
      userData: JSON.parse(localStorage.getItem("userData")) || []

      
    },
    actions: {
      
		registerUser: async (user) => {
        const store = getStore();
        try {
          let response = await fetch(`${process.env.BACKEND_URL}/user`, {
            method: "POST",

            body: user,
          });

          let data = await response.json();
          return data.status;
        } catch (error) {
          return data.status;
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
  
        // Guarda los datos en el localStorage
        localStorage.setItem("userData", JSON.stringify(responseData));
  
        // Actualiza el valor de userData utilizando setStore
        getActions().setStore({
          userData: responseData,
        });
      } else {
        console.log("Error fetching user data:", response.status);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  },
    }
  };
};

export default getState;
