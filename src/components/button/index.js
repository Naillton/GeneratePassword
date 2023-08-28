import { Pressable, Text } from "react-native";

import { style } from "./style";

export default function ButtonF({ title, onPress, ...rest }) {

    return (
        <Pressable
            onPress={onPress}
            {...rest}
            >

            <Text style={style.text}>{title}</Text>

        </Pressable>
    )

}