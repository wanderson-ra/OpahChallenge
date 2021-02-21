export interface ImageUrlsByCharacter {
    url: string;
    name: string;
}

export const imageUrlsByCharacter: Array<ImageUrlsByCharacter> = [
    {
        name: "Luke Skywalker",
        url:
            "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=768",
    },
    {
        name: "Darth Vader",
        url: "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
    },
    {
        name: "Leia Organa",
        url:
            "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
    },
    {
        name: "Obi-Wan Kenobi",
        url:
            "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768",
    },
];
