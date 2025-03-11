import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../assets/restaurant_logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil en Restaurants</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cuál te ha gustado más y
        comenta cómo ha sido tu experiencia.
      </Text>
      <Button
        buttonStyle={styles.button}
        title={"Ver tu perfil"}
        onPress={() => navigation.navigate("login")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f8a413",
  },
});
