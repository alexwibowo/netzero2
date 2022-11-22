import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/Intro/IntroScreen";

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={IntroScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;