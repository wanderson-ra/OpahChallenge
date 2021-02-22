import React, { useRef, useCallback, useState, useEffect } from "react";
import Animated from "react-native-reanimated";
import { onScrollEvent, useValue } from "react-native-redash";

import { Planet } from "src/domains/planet";

import { strings } from "src/utils/strings";

import { Conditional } from "src/components/conditional/Conditional";

import { ANIMATION_DELAY_DURATION } from "src/globals/constants/animation";

import { AnimatedScrollView, NotSearchPatients, AnimatedView } from "./styles";

import { PlanetItem } from "../planetItem/PlanetItem";
import { Search } from "../search/Search";

interface PlanetsProps {
    planets: Array<Planet>;
}

export const Planets: React.FC<PlanetsProps> = (planetsProps) => {
    const { planets } = planetsProps;

    const [planetsFiltered, setPlanetsFiltered] = useState<Array<Planet>>();
    const [search, setSearch] = useState<string>("");

    const scrollView = useRef<Animated.ScrollView>(null);
    const scrollY = useValue(0);
    const onScroll = onScrollEvent({ y: scrollY });

    const renderItem = (planet: Planet, index: number): React.ReactElement => {
        return <PlanetItem key={planet.name} index={index} planet={planet} />;
    };

    const renderNotSearchPlanets = (): React.ReactNode => {
        return (
            <NotSearchPatients testID={"NotSearch"} lineBreakMode={"tail"} numberOfLines={1}>
                {strings.text.planetNotFound}
            </NotSearchPatients>
        );
    };

    const renderOriginalPlanets = useCallback(() => {
        return planets?.map((planet, index) => {
            return renderItem(planet, index);
        });
    }, [planets]);

    const renderFilteredPlanets = (): React.ReactNode => {
        if (planetsFiltered?.length === 0) {
            return renderNotSearchPlanets();
        }

        return planetsFiltered?.map((patient, index) => {
            return renderItem(patient, index);
        });
    };

    const renderPlanets = (): React.ReactNode => {
        if (planetsFiltered) {
            return renderFilteredPlanets();
        } else {
            return renderOriginalPlanets();
        }
    };

    const sortedByName = (filteredPlanets: Array<Planet>): Array<Planet> => {
        return filteredPlanets.sort((firstPlanet, secondPlanet) => firstPlanet.name.localeCompare(secondPlanet.name));
    };

    const handlerFilterPlanets = (text: string, planetsFilter: Array<Planet>): Array<Planet> => {
        return planetsFilter.filter((planet) => planet.name.toLowerCase().includes(text.toLowerCase()));
    };

    const onTextChange = useCallback(
        (text: string): void => {
            if (planets) {
                const filteredFeeds = handlerFilterPlanets(text, planets);
                const sortedFilteredFields = sortedByName(filteredFeeds);
                setPlanetsFiltered(sortedFilteredFields);
            }
        },
        [planets]
    );

    useEffect(() => {
        if (search !== "") {
            onTextChange(search);
        } else {
            setPlanetsFiltered(undefined);
        }
    }, [onTextChange, search]);

    return (
        <>
            <AnimatedView delay={ANIMATION_DELAY_DURATION + 50} animation="fadeInLeft">
                <Search search={search} setSearch={setSearch} scrollY={scrollY} />
            </AnimatedView>

            <AnimatedScrollView
                testID={"planets"}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ref={scrollView}
                scrollEventThrottle={1}
                onScroll={onScroll}
            >
                <Conditional when={planets.length <= 0}>{renderNotSearchPlanets()}</Conditional>
                <Conditional when={planets.length >= 0}>{renderPlanets()}</Conditional>
            </AnimatedScrollView>
        </>
    );
};
