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
 * @interface AuthResendCodeCreateRequest
 */
export interface AuthResendCodeCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthResendCodeCreateRequest
     */
    userId: string;
}

/**
 * Check if a given object implements the AuthResendCodeCreateRequest interface.
 */
export function instanceOfAuthResendCodeCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function AuthResendCodeCreateRequestFromJSON(json: any): AuthResendCodeCreateRequest {
    return AuthResendCodeCreateRequestFromJSONTyped(json, false);
}

export function AuthResendCodeCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthResendCodeCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
    };
}

export function AuthResendCodeCreateRequestToJSON(value?: AuthResendCodeCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
    };
}

