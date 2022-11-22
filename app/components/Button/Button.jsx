import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import Text from "../Text";

const Button = (props) => {
    const { fullWidth, onPress, text, icon } = props;
    return (
        <TouchableOpacity onPress={onPress} {...props}>
            <Text.Primary bold center white>
                {text}
            </Text.Primary>
        </TouchableOpacity>
    );
};

export default Button;