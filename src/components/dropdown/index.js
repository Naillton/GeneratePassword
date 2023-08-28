import React, { useContext } from "react";
import { View } from 'react-native';
import {SelectList}from 'react-native-dropdown-select-list';
import MyContext from "../../context/MyContext";

import { style } from "./style";

export default function DropFunc() {

    const {
        setSelected,
        data
    } = useContext(MyContext);

    return (
        <View style={style.container}>
            <SelectList setSelected={setSelected} data={data} />
        </View>

    )

}