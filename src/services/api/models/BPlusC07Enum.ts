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
export const BPlusC07Enum = {
    Need: 'need',
    NoNeed: 'no_need',
    Unknown: 'unknown'
} as const;
export type BPlusC07Enum = typeof BPlusC07Enum[keyof typeof BPlusC07Enum];


export function BPlusC07EnumFromJSON(json: any): BPlusC07Enum {
    return BPlusC07EnumFromJSONTyped(json, false);
}

export function BPlusC07EnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): BPlusC07Enum {
    return json as BPlusC07Enum;
}

export function BPlusC07EnumToJSON(value?: BPlusC07Enum | null): any {
    return value as any;
}
