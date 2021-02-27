import React, { useCallback, useState, useRef, useEffect } from "react";
import { ListRenderItemInfo, ActivityIndicator } from "react-native";
import { heightPercentageToDP as height } from "react-native-responsive-screen";

import { Planet } from "src/domains/planet";

import { ListPlanets, Container } from "./styles";

import { Conditional } from "../../../../components/conditional/Conditional";
import { PlanetItem } from "../planetItem/PlanetItem";
import { useFindByPlanetsWithPageNumber } from "./hooks/useFindPlanetsWithPageNumber";

interface PlanetsProps {
    initialPlanets: Array<Planet>;
}

export const Planets: React.FC<PlanetsProps> = (planetsProps) => {
    const [pageNumber, setPageNumber] = useState(1);

    const { initialPlanets } = planetsProps;

    const planetsAlreadyFinded = useRef<Array<Planet>>(initialPlanets);

    const { planets, isLoading, findByPlanetsWithPageNumber } = useFindByPlanetsWithPageNumber();

    const loadMorePlanets = useCallback(() => {
        findByPlanetsWithPageNumber(planetsAlreadyFinded.current, pageNumber + 1);
        setPageNumber(pageNumber + 1);
    }, [findByPlanetsWithPageNumber, pageNumber]);

    useEffect(() => {
        if (planets) {
            planetsAlreadyFinded.current = planets;
        }
    }, [planets]);

    const renderItem = useCallback((item: ListRenderItemInfo<Planet>): React.ReactElement => {
        return <PlanetItem key={item.item.name} index={item.index} planet={item.item} />;
    }, []);

    return (
        <Container>
            <ListPlanets
                contentContainerStyle={{
                    paddingTop: height(5),
                    paddingBottom: height(5),
                }}
                testID={"planets"}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={1}
                data={planets ? planets : initialPlanets}
                renderItem={(item): React.ReactElement => renderItem(item as ListRenderItemInfo<Planet>)}
                keyExtractor={(_, index): string => String(index)}
                onEndReached={loadMorePlanets}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    <Conditional when={isLoading}>
                        <ActivityIndicator />
                    </Conditional>
                }
            />
        </Container>
    );
};
