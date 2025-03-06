import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants";
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top- restaurantsStack"
        component={TopRestaurants}
        options={{ title: "Mejores Restaurantes" }}
      />
    </Stack.Navigator>
  );
}
