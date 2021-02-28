import React, { useCallback, useState, useRef, useEffect } from "react";
import { ListRenderItemInfo } from "react-native";

import { Planet } from "src/domains/planet";

import { ListPlanets, Container } from "./styles";

import { LoadingListFooter } from "../loadingListFooter/LoadingListFooter";
import { PlanetItem } from "../planetItem/PlanetItem";
import { SearchHeader } from "../searchHeader/SearchHeader";
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
                testID={"Planets"}
                data={planets ? planets : initialPlanets}
                renderItem={(item): React.ReactElement => renderItem(item as ListRenderItemInfo<Planet>)}
                keyExtractor={(_, index): string => String(index)}
                onEndReached={loadMorePlanets}
                ListHeaderComponent={<SearchHeader />}
                ListFooterComponent={<LoadingListFooter isLoading={isLoading} />}
            />
        </Container>
    );
};
