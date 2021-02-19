export class BaseException extends Error {
    constructor(message?: string) {
        super();
        this.message = message ? message : "";
    }
}
