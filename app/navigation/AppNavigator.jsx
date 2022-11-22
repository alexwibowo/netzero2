import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import RootNavigator from "./RootNavigator";

const AppStack = createStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="AppStack"
                    options={{ headerShown: false }}
                    component={RootNavigator}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigator;