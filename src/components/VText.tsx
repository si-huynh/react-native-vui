import React from 'react'
import { Text, TextProps, StyleSheet } from 'react-native'

interface Props extends TextProps {
    size?: number
    text: string
}

const VText: React.FC<Props> = ({ size, text, ...nativeProps }: Props) => {
    const style = StyleSheet.flatten(nativeProps.style || {})
    if (size) {
        style.fontSize = size
    }
    return <Text {...{ ...nativeProps, style }}>{text}</Text>
}

export default VText
