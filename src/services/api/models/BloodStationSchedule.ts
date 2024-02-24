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
 * @interface BloodStationSchedule
 */
export interface BloodStationSchedule {
    /**
     * 
     * @type {number}
     * @memberof BloodStationSchedule
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof BloodStationSchedule
     */
    readonly dow: string;
    /**
     * 
     * @type {string}
     * @memberof BloodStationSchedule
     */
    start: string;
    /**
     * 
     * @type {string}
     * @memberof BloodStationSchedule
     */
    end: string;
}

/**
 * Check if a given object implements the BloodStationSchedule interface.
 */
export function instanceOfBloodStationSchedule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "dow" in value;
    isInstance = isInstance && "start" in value;
    isInstance = isInstance && "end" in value;

    return isInstance;
}

export function BloodStationScheduleFromJSON(json: any): BloodStationSchedule {
    return BloodStationScheduleFromJSONTyped(json, false);
}

export function BloodStationScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BloodStationSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'dow': json['dow'],
        'start': json['start'],
        'end': json['end'],
    };
}

export function BloodStationScheduleToJSON(value?: BloodStationSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': value.start,
        'end': value.end,
    };
}
