export const shadeColor = (color: string, percent: number): string => {
    return (
        "#" +
        color
            .replace(/^#/, "")
            .replace(/../g, (color) =>
                ("0" + Math.min(255, Math.max(0, parseInt(color, 16) + percent)).toString(16)).substr(-2)
            )
    );
};
