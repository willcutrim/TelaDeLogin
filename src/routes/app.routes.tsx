import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from "@screens/Home";
import { Login } from "@screens/Login";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Login'
                    component={Login}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}