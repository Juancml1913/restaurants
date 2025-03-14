import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search-stack"
        component={Search}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
}
