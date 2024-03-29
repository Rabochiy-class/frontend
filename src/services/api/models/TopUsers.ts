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
import type { City } from './City';
import {
    CityFromJSON,
    CityFromJSONTyped,
    CityToJSON,
} from './City';
import type { DonationAggTop } from './DonationAggTop';
import {
    DonationAggTopFromJSON,
    DonationAggTopFromJSONTyped,
    DonationAggTopToJSON,
} from './DonationAggTop';
import type { DonorStatus } from './DonorStatus';
import {
    DonorStatusFromJSON,
    DonorStatusFromJSONTyped,
    DonorStatusToJSON,
} from './DonorStatus';
import type { InlinePicture } from './InlinePicture';
import {
    InlinePictureFromJSON,
    InlinePictureFromJSONTyped,
    InlinePictureToJSON,
} from './InlinePicture';

/**
 * 
 * @export
 * @interface TopUsers
 */
export interface TopUsers {
    /**
     * 
     * @type {number}
     * @memberof TopUsers
     */
    readonly id: number;
    /**
     * 
     * @type {InlinePicture}
     * @memberof TopUsers
     */
    readonly photo: InlinePicture;
    /**
     * 
     * @type {string}
     * @memberof TopUsers
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof TopUsers
     */
    lastName?: string;
    /**
     * 
     * @type {DonationAggTop}
     * @memberof TopUsers
     */
    readonly donationAgg: DonationAggTop;
    /**
     * 
     * @type {string}
     * @memberof TopUsers
     */
    readonly bloodGroup: string;
    /**
     * 
     * @type {string}
     * @memberof TopUsers
     */
    readonly bsCount: string;
    /**
     * 
     * @type {City}
     * @memberof TopUsers
     */
    readonly city: City;
    /**
     * 
     * @type {DonorStatus}
     * @memberof TopUsers
     */
    readonly donorStatus: DonorStatus;
    /**
     * 
     * @type {boolean}
     * @memberof TopUsers
     */
    readonly isRequestUser: boolean;
}

/**
 * Check if a given object implements the TopUsers interface.
 */
export function instanceOfTopUsers(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "photo" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "donationAgg" in value;
    isInstance = isInstance && "bloodGroup" in value;
    isInstance = isInstance && "bsCount" in value;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "donorStatus" in value;
    isInstance = isInstance && "isRequestUser" in value;

    return isInstance;
}

export function TopUsersFromJSON(json: any): TopUsers {
    return TopUsersFromJSONTyped(json, false);
}

export function TopUsersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TopUsers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'photo': InlinePictureFromJSON(json['photo']),
        'firstName': json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'donationAgg': DonationAggTopFromJSON(json['donation_agg']),
        'bloodGroup': json['blood_group'],
        'bsCount': json['bs_count'],
        'city': CityFromJSON(json['city']),
        'donorStatus': DonorStatusFromJSON(json['donor_status']),
        'isRequestUser': json['is_request_user'],
    };
}

export function TopUsersToJSON(value?: TopUsers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}

