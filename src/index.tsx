import * as reactNative from 'react-native'

interface VuiProps {
    color: string
    style: reactNative.ViewStyle
}

export const VuiViewManager = reactNative.requireNativeComponent<VuiProps>('VuiView')

export default VuiViewManager
