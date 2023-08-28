import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useMediaQuery } from 'react-responsive';

import ButtonF from './components/button';
import TextInputF from './components/input';
import DropFunc from './components/dropdown';
import HeaderFun from './components/header';
import MyContext from './context/MyContext';

import { style } from './styles';

export default function GeneratePasswordScreen() {

    const {
        selected,
        value,
        str,
        gerarString,
        copyClipboard
    } = useContext(MyContext);

    const isMobileOrTablet = useMediaQuery({
        maxDeviceWidth: 1000
    });

    const generateAndCopy = () => {
        gerarString(selected, value);
    }

    if (isMobileOrTablet) {
        return(
            <View style={style.containerResponsive}>
                <HeaderFun style={style.textTitleResponsive}/>
                <View>
                    <TextInputF placeH={"Digite uma palavra para embaralhar"}/>
                    <DropFunc />
                </View>
                <ButtonF title={"Generate"} onPress={() => generateAndCopy()} style={style.btnResponsive}/>
                {
                    str.length > 0 ? (
                        <Text
                            onPress={() => copyClipboard()}
                            style={style.textResponsive}>
                                Senha gerada toque para copiar: {str}
                        </Text>
                    ) : null
                }
            </View>
        );

    }

    return(
        <View style={style.container}>
            <HeaderFun style={style.textTitle}/>
            <View style={style.subContainer1}>
                <View>
                    <TextInputF placeH={"Digite uma palavra para embaralhar"} />
                    <DropFunc />
                </View>
                <ButtonF title={"Generate"} onPress={() => generateAndCopy()} style={style.btn} />
            </View>
            {
                str.length > 0 ? (
                    <Text
                        onPress={() => copyClipboard()}
                        style={style.text}>
                            Senha gerada toque para copiar: {str}
                    </Text>
                ) : null
            }
        </View>
    );
    
}
