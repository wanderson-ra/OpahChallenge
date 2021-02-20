import React, { useState, useEffect, useCallback } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

import { useTheme } from "styled-components/native";

import { metrics } from "src/configurations/metrics";

import { Container, TextInputContainer, IconTextInput, SearchTextInput, ClearButton, ClearIcon } from "./styles";

export interface ValidatedTextInputProps {
    value: string;
    placeholder?: string;
    placeholderTextColor?: string;
    selectionColor?: string;
    onChangeText: (text: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
}

export const SearchTextField: React.FC<ValidatedTextInputProps> = (validatedTextInputProps) => {
    const theme = useTheme();

    const {
        value,
        containerStyle,
        textInputStyle,
        onChangeText,
        placeholder,
        placeholderTextColor,
        selectionColor,
    } = validatedTextInputProps;

    const [isEditingEmail, setIsEditingEmail] = useState(false);

    useEffect(() => {
        setIsEditingEmail(value.length > 0);
    }, [value]);

    const handlerOnChangeText = useCallback(
        (text: string): void => {
            onChangeText(text);
        },
        [onChangeText]
    );

    const handlerClearTextInput = useCallback((): void => {
        handlerOnChangeText("");
    }, [handlerOnChangeText]);

    return (
        <Container>
            <TextInputContainer style={containerStyle}>
                <IconTextInput size={metrics.icon.large} name={"magnify"} color={theme.icon.default} />
                <SearchTextInput
                    autoCapitalize={"none"}
                    testID={"input"}
                    selectionColor={selectionColor ? selectionColor : theme.textInput.placeholder}
                    value={value}
                    keyboardType={"default"}
                    returnKeyType={"search"}
                    onChangeText={handlerOnChangeText}
                    style={textInputStyle}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : theme.textInput.placeholder}
                />

                <ClearButton
                    testID={"clearButton"}
                    rippleColor={isEditingEmail ? theme.ripple : "transparent"}
                    onPress={(): void => handlerClearTextInput()}
                >
                    {isEditingEmail ? (
                        <ClearIcon
                            size={metrics.icon.medium}
                            name={"close-circle-outline"}
                            color={theme.icon.default}
                        />
                    ) : null}
                </ClearButton>
            </TextInputContainer>
        </Container>
    );
};
