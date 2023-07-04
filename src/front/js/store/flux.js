const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || null,
      message: null,
      userData: [],

      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
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
	  
		  let data;
		  if (response.ok) {
			data = await response.json();
			setStore({
			  token: data.token,
			});
			localStorage.setItem("token", data.token);
			console.log(token)
			console.log(response)
			return data.status;
		  } else {
			// Manejar el caso de error aquí
			// Por ejemplo, puedes lanzar una excepción con el mensaje de error
			throw new Error("Error en la solicitud");
		  }
		} catch (error) {
		  // Manejar el caso de error aquí
		  console.error(error);
		  // Puedes devolver el estado del error o algún valor para indicar que ocurrió un error
		  return 500; // Por ejemplo, devolver un código de estado 500
		}
	  },

      getUserData: async (token) => {
        const store = getStore();
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/user/token`,
            {
              method: "GET",
              headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
            }}
          );
          console.log(response);
          console.log(id);
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
