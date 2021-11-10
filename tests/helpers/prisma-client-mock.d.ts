export declare namespace Prisma {
    /**
     * Utility Types
     */
    /**
     * From https://github.com/sindresorhus/type-fest/
     * Matches a JSON object.
     * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
     */
    type JsonObject = {
        [Key in string]?: JsonValue;
    };
    /**
     * From https://github.com/sindresorhus/type-fest/
     * Matches a JSON array.
     */
    interface JsonArray extends Array<JsonValue> {
    }
    /**
     * From https://github.com/sindresorhus/type-fest/
     * Matches any valid JSON value.
     */
    type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
    /**
     * Same as JsonObject, but allows undefined
     */
    type InputJsonObject = {
        [Key in string]?: JsonValue;
    };
    interface InputJsonArray extends Array<JsonValue> {
    }
    type InputJsonValue = undefined | string | number | boolean | null | InputJsonObject | InputJsonArray;
    class Decimal {
        constructor(...arg: any[]);
        static isDecimal(object: any): boolean;
    }
}
