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
 * * `unknown` - нет данных
 * @export
 */
export const APlusC07Enum = {
    Need: 'need',
    NoNeed: 'no_need',
    Unknown: 'unknown'
} as const;
export type APlusC07Enum = typeof APlusC07Enum[keyof typeof APlusC07Enum];


export function APlusC07EnumFromJSON(json: any): APlusC07Enum {
    return APlusC07EnumFromJSONTyped(json, false);
}

export function APlusC07EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): APlusC07Enum {
    return json as APlusC07Enum;
}

export function APlusC07EnumToJSON(value?: APlusC07Enum | null): any {
    return value as any;
}

