import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants-stack"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
    </Stack.Navigator>
  );
}
