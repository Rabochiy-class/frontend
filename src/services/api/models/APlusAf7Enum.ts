/* tslint:disable */
/* eslint-disable */
/**
 * TelegramWebDonorSearch API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `need` - нужна
 * * `no_need` - не нужна
 * @export
 */
export const APlusAf7Enum = {
    Need: 'need',
    NoNeed: 'no_need'
} as const;
export type APlusAf7Enum = typeof APlusAf7Enum[keyof typeof APlusAf7Enum];


export function APlusAf7EnumFromJSON(json: any): APlusAf7Enum {
    return APlusAf7EnumFromJSONTyped(json, false);
}

export function APlusAf7EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): APlusAf7Enum {
    return json as APlusAf7Enum;
}

export function APlusAf7EnumToJSON(value?: APlusAf7Enum | null): any {
    return value as any;
}
