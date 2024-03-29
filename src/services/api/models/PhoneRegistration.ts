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
 * @interface PhoneRegistration
 */
export interface PhoneRegistration {
    /**
     * 
     * @type {string}
     * @memberof PhoneRegistration
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneRegistration
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneRegistration
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof PhoneRegistration
     */
    tag?: string;
}

/**
 * Check if a given object implements the PhoneRegistration interface.
 */
export function instanceOfPhoneRegistration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "phone" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "firstName" in value;

    return isInstance;
}

export function PhoneRegistrationFromJSON(json: any): PhoneRegistration {
    return PhoneRegistrationFromJSONTyped(json, false);
}

export function PhoneRegistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PhoneRegistration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phone': json['phone'],
        'password': json['password'],
        'firstName': json['first_name'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function PhoneRegistrationToJSON(value?: PhoneRegistration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phone': value.phone,
        'password': value.password,
        'first_name': value.firstName,
        'tag': value.tag,
    };
}

