import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";

export const isUserLogged = () => {
  let isLogged = false;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Usuario autenticado:", user);
      isLogged = true;
    } else {
      console.log("No hay usuario autenticado.");
      isLogged = false;
    }
  });
  return isLogged;
};
