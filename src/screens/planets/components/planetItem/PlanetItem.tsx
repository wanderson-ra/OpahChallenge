import React, { memo } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height } from "react-native-responsive-screen";

import { Planet } from "src/domains/planet";

import { CardAction } from "src/components/cardAction/CardAction";
import { Initials } from "src/components/initials/Initials";

import { ANIMATION_DELAY_DURATION } from "src/globals/constants/animation";

import { AnimatedView, Name, WrapperInformation, WrapperNameAndEmail, Email } from "./styles";

interface PlanetItemProps {
    planet: Planet;
    index: number;
}

const View: React.FC<PlanetItemProps> = (patientItemProps) => {
    const { planet, index } = patientItemProps;

    return (
        <AnimatedView delay={ANIMATION_DELAY_DURATION + index * 50} animation="fadeInLeft">
            <CardAction hasShadow={false}>
                <WrapperInformation>
                    <Initials
                        name={planet.name}
                        width={isIphoneX() ? height(6) : height(8)}
                        height={isIphoneX() ? height(6) : height(8)}
                        borderRadius={isIphoneX() ? height(3) : height(4)}
                    />

                    <WrapperNameAndEmail>
                        <Name testID={"Name"} lineBreakMode={"tail"}>
                            {planet.name}
                        </Name>

                        <Email testID={"Email"} lineBreakMode={"tail"}>
                            {`Clima: ${planet.climate}`}
                        </Email>
                    </WrapperNameAndEmail>
                </WrapperInformation>
            </CardAction>
        </AnimatedView>
    );
};

const PlanetItem = memo(View);
export { PlanetItem };
