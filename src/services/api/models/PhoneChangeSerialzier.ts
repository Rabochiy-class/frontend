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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PhoneChangeSerialzier
 */
export interface PhoneChangeSerialzier {
    /**
     * 
     * @type {string}
     * @memberof PhoneChangeSerialzier
     */
    phone: string;
}

/**
 * Check if a given object implements the PhoneChangeSerialzier interface.
 */
export function instanceOfPhoneChangeSerialzier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function PhoneChangeSerialzierFromJSON(json: any): PhoneChangeSerialzier {
    return PhoneChangeSerialzierFromJSONTyped(json, false);
}

export function PhoneChangeSerialzierFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneChangeSerialzier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phone': json['phone'],
    };
}

export function PhoneChangeSerialzierToJSON(value?: PhoneChangeSerialzier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phone': value.phone,
    };
}

