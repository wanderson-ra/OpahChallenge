import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import theme from "../../../../src/configurations/themes/theme";

import { Avatar } from "../../../../src/components/avatar/Avatar";

describe("Test of Avatar", () => {
    it("Test with avatar remote", async () => {
        const height = 10;
        const width = 10;
        const borderRadius = 5;
        const avatarUrl = "anyAvatarUrl";

        const avatar: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={theme.light}>
                <Avatar height={height} width={width} avatarUrl={avatarUrl} borderRadius={borderRadius} />
            </ThemeProvider>
        );

        const image = avatar.root.findByProps({ testID: "Avatar" });

        expect(image.props.height).toEqual(height);
        expect(image.props.width).toEqual(width);
        expect(image.props.borderRadius).toEqual(borderRadius);
        expect(image.props.tintColor).toEqual(undefined);
        expect(image.props.source.uri).toEqual(avatarUrl);
    });

    it("Test with avatar local", async () => {
        const height = 10;
        const width = 10;
        const borderRadius = 5;
        const avatarUrl = undefined;

        const avatar: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={theme.light}>
                <Avatar height={height} width={width} avatarUrl={avatarUrl} borderRadius={borderRadius} />
            </ThemeProvider>
        );

        const image = avatar.root.findByProps({ testID: "Avatar" });

        expect(image.props.height).toEqual(height);
        expect(image.props.width).toEqual(width);
        expect(image.props.borderRadius).toEqual(borderRadius);
        expect(image.props.tintColor).toEqual("#757575");
        expect(image.props.source).toEqual({ testUri: "../../../src/assets/png/Avatar.png" });
    });

    it("Test with avatar local after error remote", async () => {
        const height = 10;
        const width = 10;
        const borderRadius = 5;
        const avatarUrl = "anyAvatarUrl";

        const avatar: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={theme.light}>
                <Avatar height={height} width={width} avatarUrl={avatarUrl} borderRadius={borderRadius} />
            </ThemeProvider>
        );

        const image = avatar.root.findByProps({ testID: "Avatar" });

        await renderer.act(async () => {
            await image.props.onError();
        });

        expect(image.props.height).toEqual(height);
        expect(image.props.width).toEqual(width);
        expect(image.props.borderRadius).toEqual(borderRadius);
        expect(image.props.tintColor).toEqual("#757575");
        expect(image.props.source).toEqual({ testUri: "../../../src/assets/png/Avatar.png" });
    });

    it("Test with avatar remote after success remote", async () => {
        const height = 10;
        const width = 10;
        const borderRadius = undefined;
        const avatarUrl = "anyAvatarUrl";

        const avatar: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={theme.light}>
                <Avatar height={height} width={width} avatarUrl={avatarUrl} borderRadius={borderRadius} />
            </ThemeProvider>
        );

        const image = avatar.root.findByProps({ testID: "Avatar" });

        await renderer.act(async () => {
            await image.props.onError();
        });

        expect(image.props.height).toEqual(height);
        expect(image.props.width).toEqual(width);
        expect(image.props.borderRadius).toEqual(0);
        expect(image.props.tintColor).toEqual("#757575");
        expect(image.props.source).toEqual({ testUri: "../../../src/assets/png/Avatar.png" });

        await renderer.act(async () => {
            await image.props.onLoad();
        });

        expect(image.props.height).toEqual(height);
        expect(image.props.width).toEqual(width);
        expect(image.props.borderRadius).toEqual(0);
        expect(image.props.tintColor).toEqual(undefined);
        expect(image.props.source.uri).toEqual(avatarUrl);
    });
});
