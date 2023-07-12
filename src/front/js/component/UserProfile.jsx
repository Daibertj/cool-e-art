import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function UserProfile() {
  const { actions, store } = useContext(Context);
  const { userData, ilustrationsUser } = store;
  const { getUserData, getIlustrationsByUser } = actions;
  const { alias } = useParams();

  useEffect(() => {
    getUserData(alias);
    getIlustrationsByUser(alias);
  }, [alias, getUserData, getIlustrationsByUser]);

  return (
    <>
      {/* Renderiza el perfil del ilustrador */}
      <h1>{userData.name}</h1>
      {/* Resto del código para mostrar las ilustraciones del ilustrador */}
    </>
  );
}

export default UserProfile;