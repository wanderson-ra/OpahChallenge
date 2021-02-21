import React, { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";

import { People } from "src/domains/people";

import { strings } from "src/utils/strings";

import { Conditional } from "src/components/conditional/Conditional";
import { ErrorMessage } from "src/components/errorMessage/ErrorMessage";

import { Container, ListMainsPeople, Title } from "./styles";

import { useFindMainPeoples } from "../../hooks/useFindMainPeoples";
import { Loading } from "./loading/Loading";
import { MainPeopleItem } from "./mainPeopleItem/MainPeopleItem";

export const MainPeoples: React.FC = () => {
    const { data, errorMessage, isLoading, setToDefaultValueErrorMessageAndLoading } = useFindMainPeoples();

    const verifyIndexToItemRenderIsLastItemInLastPeople = useCallback(
        (index: number): boolean => {
            if (data) {
                return index !== data.length - 1;
            }
            return false;
        },
        [data]
    );

    const renderPeopleItem = useCallback(
        (item: ListRenderItemInfo<People>): React.ReactElement => {
            return (
                <MainPeopleItem
                    applyMarginRight={verifyIndexToItemRenderIsLastItemInLastPeople(item.index)}
                    people={item.item}
                />
            );
        },
        [verifyIndexToItemRenderIsLastItemInLastPeople]
    );

    return (
        <>
            <Container>
                <Conditional when={isLoading}>
                    <Loading />
                </Conditional>

                <Conditional when={!isLoading && !data && !!errorMessage}>
                    <ErrorMessage
                        onPress={(): void => setToDefaultValueErrorMessageAndLoading()}
                        messageProps={{
                            icon: "cloud-alert",
                            buttonTitle: strings.button.tryAgain,
                            message: errorMessage ? errorMessage : "",
                        }}
                    />
                </Conditional>

                <Conditional when={!isLoading && !!data && !errorMessage}>
                    <Title>{strings.title.cardsListHome.mainPeople}</Title>
                    <ListMainsPeople
                        testID={"ListMainPeoples"}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={(item): React.ReactElement => renderPeopleItem(item as ListRenderItemInfo<People>)}
                        keyExtractor={(_, index): string => String(index)}
                        data={data}
                    />
                </Conditional>
            </Container>
        </>
    );
};
