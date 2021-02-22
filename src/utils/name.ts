export const findInitials = (name: string): string => {
    const initials = name.split(" ");
    if (initials.length >= 2) {
        return `${initials[0][0]}${initials[1][0]}`;
    }
    return initials[0][0];
};
