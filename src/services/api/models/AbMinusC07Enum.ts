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
export const AbMinusC07Enum = {
    Need: 'need',
    NoNeed: 'no_need',
    Unknown: 'unknown'
} as const;
export type AbMinusC07Enum = typeof AbMinusC07Enum[keyof typeof AbMinusC07Enum];


export function AbMinusC07EnumFromJSON(json: any): AbMinusC07Enum {
    return AbMinusC07EnumFromJSONTyped(json, false);
}

export function AbMinusC07EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbMinusC07Enum {
    return json as AbMinusC07Enum;
}

export function AbMinusC07EnumToJSON(value?: AbMinusC07Enum | null): any {
    return value as any;
}

