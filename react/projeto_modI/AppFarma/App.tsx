import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Produtos from "./src/pages/Produtos";
import Usuarios from "./src/pages/Usuarios";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Produtos" component={Produtos} />

        <Stack.Screen name="Usuarios" component={Usuarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
