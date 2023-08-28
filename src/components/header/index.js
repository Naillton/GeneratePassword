import { Text, View } from 'react-native';

import { style } from './style';

export default function HeaderFun({...rest}) {

    return (
        <View style={style.container}>
            <Text {...rest}>
                Digite uma palavra para embaralhar e criar uma senha ou selecione as opcões para gerar uma nova senha
            </Text>
        </View>
    )

}