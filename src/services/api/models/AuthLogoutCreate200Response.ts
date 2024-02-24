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
 * @interface AuthLogoutCreate200Response
 */
export interface AuthLogoutCreate200Response {
    /**
     * 
     * @type {string}
     * @memberof AuthLogoutCreate200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the AuthLogoutCreate200Response interface.
 */
export function instanceOfAuthLogoutCreate200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthLogoutCreate200ResponseFromJSON(json: any): AuthLogoutCreate200Response {
    return AuthLogoutCreate200ResponseFromJSONTyped(json, false);
}

export function AuthLogoutCreate200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthLogoutCreate200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function AuthLogoutCreate200ResponseToJSON(value?: AuthLogoutCreate200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

