import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account-stack"
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar sesión" }}
      />
    </Stack.Navigator>
  );
}
