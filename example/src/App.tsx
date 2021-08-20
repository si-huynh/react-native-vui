import * as React from 'react'

import { StyleSheet, View } from 'react-native'
import VuiViewManager from 'react-native-vui'

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <VuiViewManager color="#32a852" style={styles.box} />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 60,
        marginVertical: 20,
        width: 60,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})
