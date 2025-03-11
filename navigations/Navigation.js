import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const screenOptions = (route, color) => {
    let iconName = "";
    switch (route.name) {
      case "restaurants":
        iconName = "compass-outline";
        break;
      case "favorites":
        iconName = "heart-outline";
        break;
      case "top-restaurants":
        iconName = "star-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "home-outline";
        break;

      default:
        break;
    }

    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#ff0000", // Color cuando está activo
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{
            title: "Restaurantes",
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Mejores Restaurantes" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
