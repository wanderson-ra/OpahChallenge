import React, { useCallback, useState } from "react";
import { widthPercentageToDP as width } from "react-native-responsive-screen";
import Carousel from "react-native-snap-carousel";

import { Film } from "src/domains/films";

import { strings } from "src/utils/strings";

import { Conditional } from "src/components/conditional/Conditional";
import { ErrorMessage } from "src/components/errorMessage/ErrorMessage";

import { ANIMATION_DELAY_DURATION } from "src/globals/constants/animation";

import { Container, WrapperCarousel, AnimatedView } from "./styles";

import { useFindAllFilms } from "../../hooks/useFindAllFilms";
import { FilmsCarouselItem } from "./filmsCarouseltem/FilmsCarouseltem";
import { Loading } from "./loading/Loading";
import { PaginationCarousel } from "./paginationCarousel/PaginationCarousel";

export const FilmsCarousel: React.FC = () => {
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const { data, errorMessage, isLoading, setToDefaultValueErrorMessageAndLoading } = useFindAllFilms();

    const renderCarouselItem = useCallback(({ item }: { item: Film; index: number }) => {
        return <FilmsCarouselItem film={item} />;
    }, []);

    return (
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
                <AnimatedView delay={ANIMATION_DELAY_DURATION} animation="fadeIn">
                    <WrapperCarousel>
                        <Carousel
                            layoutCardOffset={9}
                            layout={"default"}
                            data={data ? data : []}
                            renderItem={renderCarouselItem}
                            sliderWidth={width(100)}
                            itemWidth={width(100)}
                            loop
                            autoplay
                            autoplayDelay={3000}
                            autoplayInterval={3000}
                            lockScrollWhileSnapping
                            onSnapToItem={(index: number): void => setActiveDotIndex(index)}
                        />

                        <PaginationCarousel activeDotIndex={activeDotIndex} dotsLength={data ? data.length : 0} />
                    </WrapperCarousel>
                </AnimatedView>
            </Conditional>
        </Container>
    );
};
