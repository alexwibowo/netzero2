import { Text, StyleProp, TextStyle } from "react-native";

const Primary = (props) => {
    const { red, white, blue, green, darkGray, lightGray, bold, children, center } = props;

    return (
        <Text {...props} >
            {children}
        </Text>
    );
}


export default Primary;