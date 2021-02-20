import { Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

export const metrics = {
    font: {
        smallMicro: Platform.select({
            android: height(1.3),
            ios: isIphoneX() ? height(1.2) : height(1.3),
            default: height(1.3),
        }),

        micro: Platform.select({
            android: height(1.8),
            ios: isIphoneX() ? height(1.4) : height(1.8),
            default: height(1.8),
        }),

        small: Platform.select({
            android: height(2.1),
            ios: isIphoneX() ? height(1.6) : height(2.1),
            default: height(2.1),
        }),

        medium: Platform.select({
            android: height(2.3),
            ios: isIphoneX() ? height(2) : height(2.3),
            default: height(2.3),
        }),

        large: Platform.select({
            android: height(2.8),
            ios: isIphoneX() ? height(2.3) : height(2.8),
            default: height(2.8),
        }),

        extraLarge: Platform.select({
            android: height(3.5),
            ios: isIphoneX() ? height(3) : height(3.5),
            default: height(3.5),
        }),
    },

    textInput: {
        height: isIphoneX() ? height(5.5) : height(6.5),
        borderRadius: height(1),
        modal: {
            height: isIphoneX() ? height(5) : height(6),
            borderRadius: isIphoneX() ? height(2.5) : height(3),
        },
    },

    icon: {
        small: Platform.select({
            android: height(2.4),
            ios: isIphoneX() ? height(1.9) : height(2.4),
            default: height(2.4),
        }),

        medium: Platform.select({
            android: height(3),
            ios: isIphoneX() ? height(2.3) : height(2.8),
            default: height(3),
        }),

        large: Platform.select({
            android: height(3),
            ios: isIphoneX() ? height(2.9) : height(3.4),
            default: height(3.4),
        }),

        extraLarge: Platform.select({
            android: height(3.5),
            ios: isIphoneX() ? height(2.9) : height(3.4),
            default: height(3.5),
        }),
        bigger: Platform.select({
            android: height(4.5),
            ios: isIphoneX() ? height(4) : height(4.5),
            default: height(4.5),
        }),
    },
};
