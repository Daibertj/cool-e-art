const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || null,
      userData: JSON.parse(localStorage.getItem("userData")) || [],
      ilustrationData: JSON.parse(localStorage.getItem("ilustrationData")) || []
      
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
	  
		
		  let response = await fetch(`${process.env.BACKEND_URL}/login`, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		  });
	  try {
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
  
        localStorage.setItem("userData", JSON.stringify(responseData));
  
        
        setStore({userData: [...store.userData, responseData]
          });
      } else {
        console.log("Error fetching user data:", response.status);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  },

  getIlustrarions: async ()=>{
    const store=getStore()
    try {
      const response = await fetch (`${process.env.BACKEND_URL}/ilustration`, {
        method :"GET",
        headers: { 	  
          'Content-Type': 'application/json'
        }
      })
      if (response.ok){
        const responseData= await response.json()
        console.log("Ilustration data:", responseData)
        setStore({ilustrationData: [...store.ilustrationData, responseData]})
      }
      else {
        console.log("Error getting ilustrations:", error)
      }
    } catch (error) {
      console.log("Error getting ilustrations:", error)
    }

  }
    }
  };
};

export default getState;
