import React, { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";
import { heightPercentageToDP as height } from "react-native-responsive-screen";

import { Planet } from "src/domains/planet";

import { ListPlanets, Container } from "./styles";

import { PlanetItem } from "../planetItem/PlanetItem";

interface PlanetsProps {
    planets: Array<Planet>;
}

export const Planets: React.FC<PlanetsProps> = (planetsProps) => {
    const { planets } = planetsProps;

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
                data={planets}
                renderItem={(item): React.ReactElement => renderItem(item as ListRenderItemInfo<Planet>)}
                keyExtractor={(_, index): string => String(index)}
            />
        </Container>
    );
};
