import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props): string => props.theme.page.background};
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;
