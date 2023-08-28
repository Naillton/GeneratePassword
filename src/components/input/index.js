import React, { useContext } from "react";
import { TextInput } from "react-native";

import { style } from "./style";
import MyContext from "../../context/MyContext";

export default function TextInputF({ placeH}) {
    const {
        value,
        setValue,
    } = useContext(MyContext);
    return (
        <TextInput
            placeholder={placeH}
            placeholderTextColor="#2a2e48"
            inputMode="default"
            maxLength={200}
            value={value}
            onChangeText={setValue}
            style={style.input}
        />
    )
}