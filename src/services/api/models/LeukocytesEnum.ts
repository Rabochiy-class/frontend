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
 * * `accept` - принимает
 * * `no_accept` - не принимает
 * * `unknown` - нет данных
 * @export
 */
export const LeukocytesEnum = {
    Accept: 'accept',
    NoAccept: 'no_accept',
    Unknown: 'unknown'
} as const;
export type LeukocytesEnum = typeof LeukocytesEnum[keyof typeof LeukocytesEnum];


export function LeukocytesEnumFromJSON(json: any): LeukocytesEnum {
    return LeukocytesEnumFromJSONTyped(json, false);
}

export function LeukocytesEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeukocytesEnum {
    return json as LeukocytesEnum;
}

export function LeukocytesEnumToJSON(value?: LeukocytesEnum | null): any {
    return value as any;
}

