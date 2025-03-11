import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { isUserLogged } from "../../utils/actions";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
import Loading from "../../components/Loading";

export default function Account() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    setLogin(isUserLogged());
  }, []);

  if (login == null) {
    <Loading isVisible={true} text={"Cargando..."} />;
  }

  return login ? <UserLogged /> : <UserGuest />;
}

const styles = StyleSheet.create({});
