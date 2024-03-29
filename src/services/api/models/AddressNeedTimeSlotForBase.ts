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
 * @interface AddressNeedTimeSlotForBase
 */
export interface AddressNeedTimeSlotForBase {
    /**
     * 
     * @type {number}
     * @memberof AddressNeedTimeSlotForBase
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof AddressNeedTimeSlotForBase
     */
    readonly joinedCount: number;
    /**
     * 
     * @type {Date}
     * @memberof AddressNeedTimeSlotForBase
     */
    date: Date;
}

/**
 * Check if a given object implements the AddressNeedTimeSlotForBase interface.
 */
export function instanceOfAddressNeedTimeSlotForBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "joinedCount" in value;
    isInstance = isInstance && "date" in value;

    return isInstance;
}

export function AddressNeedTimeSlotForBaseFromJSON(json: any): AddressNeedTimeSlotForBase {
    return AddressNeedTimeSlotForBaseFromJSONTyped(json, false);
}

export function AddressNeedTimeSlotForBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressNeedTimeSlotForBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'joinedCount': json['joined_count'],
        'date': (new Date(json['date'])),
    };
}

export function AddressNeedTimeSlotForBaseToJSON(value?: AddressNeedTimeSlotForBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': (value.date.toISOString().substring(0,10)),
    };
}

