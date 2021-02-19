declare module "react-native-config" {
    interface Env {
        ENV: "DEVELOPMENT" | "STAGING" | "PRODUCTION";
        STAR_WARS_API_BASE_URL: string;
    }

    const Config: Env;

    export default Config;
}
