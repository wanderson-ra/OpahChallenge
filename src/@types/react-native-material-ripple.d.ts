declare module "react-native-material-ripple" {
    import React from "react";
    import { StyleProp, ViewStyle } from "react-native";

    export type MaterialRippleProps = {
        rippleColor?: string;
        rippleOpacity?: number;
        rippleDuration?: number;
        rippleSize?: number;
        rippleContainerBorderRadius?: number;
        rippleCentered?: boolean;
        rippleSequential?: boolean;
        rippleFades?: boolean;
        disabled?: boolean;
        onPressIn?: () => void;
        onPressOut?: () => void;
        onPress?: () => void;
        onLongPress?: () => void;
        onRippleAnimation?: () => void;
        style?: StyleProp<ViewStyle>;
        testID?: string;
    };

    const MaterialRipple: React.ComponentType<MaterialRippleProps>;
    export default MaterialRipple;
}
