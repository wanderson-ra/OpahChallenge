import React from "react";

interface ConditionalProps {
    when: boolean;
    children: React.ReactNode;
}

export const Conditional: React.FC<ConditionalProps> = (conditionalProps) => {
    const { when, children } = conditionalProps;
    return <>{when && children}</>;
};
