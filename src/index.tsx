import { requireNativeComponent, ViewStyle } from 'react-native';

type VuiProps = {
  color: string;
  style: ViewStyle;
};

export const VuiViewManager = requireNativeComponent<VuiProps>(
'VuiView'
);

export default VuiViewManager;
