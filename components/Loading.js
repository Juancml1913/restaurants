import { Overlay } from "@rneui/themed";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Loading({ isVisible, text }) {
  return (
    <Overlay
      isVisible={isVisible}
      style={styles.overlay}
      overlayStyle={{ backgroundColor: "transparent" }}
    >
      <View style={styles.view}>
        <ActivityIndicator size={"large"} color={"#fba612"} />
        {text && <Text>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    borderColor: "#fe0100",
    backgroundColor: "fff",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
