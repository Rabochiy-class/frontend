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
export const AbPlusC07Enum = {
    Need: 'need',
    NoNeed: 'no_need',
    Unknown: 'unknown'
} as const;
export type AbPlusC07Enum = typeof AbPlusC07Enum[keyof typeof AbPlusC07Enum];


export function AbPlusC07EnumFromJSON(json: any): AbPlusC07Enum {
    return AbPlusC07EnumFromJSONTyped(json, false);
}

export function AbPlusC07EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbPlusC07Enum {
    return json as AbPlusC07Enum;
}

export function AbPlusC07EnumToJSON(value?: AbPlusC07Enum | null): any {
    return value as any;
}
