import React, { useCallback, useState } from "react";
import FastImage from "react-native-fast-image";

import { useTheme } from "styled-components/native";

import defaultImage from "src/assets/png/Avatar.png";

import { Container, Image } from "./styles";

interface AvatarProps {
    width: number;
    height: number;
    borderRadius?: number;
    avatarUrl?: string;
}

export const Avatar: React.FC<AvatarProps> = (avatarProps) => {
    const { avatarUrl, height, width, borderRadius = 0 } = avatarProps;

    const theme = useTheme();

    const [hasAvatarLoadError, setHasAvatarLoadError] = useState(false);

    const onLoadAvatarError = useCallback(() => {
        setHasAvatarLoadError(true);
    }, []);

    const onLoadAvatarSuccess = useCallback(() => {
        setHasAvatarLoadError(false);
    }, []);

    return (
        <Container>
            <Image
                onLoad={onLoadAvatarSuccess}
                onError={onLoadAvatarError}
                height={height}
                width={width}
                borderRadius={borderRadius}
                testID={"Avatar"}
                tintColor={avatarUrl && !hasAvatarLoadError ? undefined : theme.icon.default}
                source={
                    avatarUrl && !hasAvatarLoadError
                        ? {
                              uri: avatarUrl,
                              priority: FastImage.priority.normal,
                          }
                        : defaultImage
                }
                resizeMode={FastImage.resizeMode.cover}
            />
        </Container>
    );
};
