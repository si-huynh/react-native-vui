import * as React from 'react'

import { StyleSheet, View } from 'react-native'
import { VText } from 'react-native-vui'

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <VText text="Hello VUI" size={32} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})
