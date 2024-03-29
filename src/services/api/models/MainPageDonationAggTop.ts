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
 * @interface MainPageDonationAggTop
 */
export interface MainPageDonationAggTop {
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    count?: number;
    /**
     * 
     * @type {Date}
     * @memberof MainPageDonationAggTop
     */
    lastDonationAt?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    blood?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    plasma?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    platelets?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    erythrocytes?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    leukocytes?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    countYear?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    bloodYear?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    plasmaYear?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    plateletsYear?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    erythrocytesYear?: number;
    /**
     * 
     * @type {number}
     * @memberof MainPageDonationAggTop
     */
    leukocytesYear?: number;
}

/**
 * Check if a given object implements the MainPageDonationAggTop interface.
 */
export function instanceOfMainPageDonationAggTop(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MainPageDonationAggTopFromJSON(json: any): MainPageDonationAggTop {
    return MainPageDonationAggTopFromJSONTyped(json, false);
}

export function MainPageDonationAggTopFromJSONTyped(json: any, ignoreDiscriminator: boolean): MainPageDonationAggTop {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'lastDonationAt': !exists(json, 'last_donation_at') ? undefined : (json['last_donation_at'] === null ? null : new Date(json['last_donation_at'])),
        'blood': !exists(json, 'blood') ? undefined : json['blood'],
        'plasma': !exists(json, 'plasma') ? undefined : json['plasma'],
        'platelets': !exists(json, 'platelets') ? undefined : json['platelets'],
        'erythrocytes': !exists(json, 'erythrocytes') ? undefined : json['erythrocytes'],
        'leukocytes': !exists(json, 'leukocytes') ? undefined : json['leukocytes'],
        'countYear': !exists(json, 'count_year') ? undefined : json['count_year'],
        'bloodYear': !exists(json, 'blood_year') ? undefined : json['blood_year'],
        'plasmaYear': !exists(json, 'plasma_year') ? undefined : json['plasma_year'],
        'plateletsYear': !exists(json, 'platelets_year') ? undefined : json['platelets_year'],
        'erythrocytesYear': !exists(json, 'erythrocytes_year') ? undefined : json['erythrocytes_year'],
        'leukocytesYear': !exists(json, 'leukocytes_year') ? undefined : json['leukocytes_year'],
    };
}

export function MainPageDonationAggTopToJSON(value?: MainPageDonationAggTop | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'last_donation_at': value.lastDonationAt === undefined ? undefined : (value.lastDonationAt === null ? null : value.lastDonationAt.toISOString().substring(0,10)),
        'blood': value.blood,
        'plasma': value.plasma,
        'platelets': value.platelets,
        'erythrocytes': value.erythrocytes,
        'leukocytes': value.leukocytes,
        'count_year': value.countYear,
        'blood_year': value.bloodYear,
        'plasma_year': value.plasmaYear,
        'platelets_year': value.plateletsYear,
        'erythrocytes_year': value.erythrocytesYear,
        'leukocytes_year': value.leukocytesYear,
    };
}

