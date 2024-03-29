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
import type { MainPageDonationAggTop } from './MainPageDonationAggTop';
import {
    MainPageDonationAggTopFromJSON,
    MainPageDonationAggTopFromJSONTyped,
    MainPageDonationAggTopToJSON,
} from './MainPageDonationAggTop';

/**
 * 
 * @export
 * @interface UserTop
 */
export interface UserTop {
    /**
     * 
     * @type {number}
     * @memberof UserTop
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    middleName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly bloodGroup: string;
    /**
     * 
     * @type {InlinePicture}
     * @memberof UserTop
     */
    readonly photo: InlinePicture;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly legacyAvatar: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserTop
     */
    honorDonor?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly count: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly countBs: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly countBlood: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly countPlasma: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly countLeukocytes: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly countErythrocytes: string;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly countPlatelets: string;
    /**
     * 
     * @type {DonorStatus}
     * @memberof UserTop
     */
    readonly donorStatus: DonorStatus;
    /**
     * 
     * @type {MainPageDonationAggTop}
     * @memberof UserTop
     */
    readonly donationAgg: MainPageDonationAggTop;
    /**
     * 
     * @type {string}
     * @memberof UserTop
     */
    readonly isRequestUser: string;
}

/**
 * Check if a given object implements the UserTop interface.
 */
export function instanceOfUserTop(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "bloodGroup" in value;
    isInstance = isInstance && "photo" in value;
    isInstance = isInstance && "legacyAvatar" in value;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "countBs" in value;
    isInstance = isInstance && "countBlood" in value;
    isInstance = isInstance && "countPlasma" in value;
    isInstance = isInstance && "countLeukocytes" in value;
    isInstance = isInstance && "countErythrocytes" in value;
    isInstance = isInstance && "countPlatelets" in value;
    isInstance = isInstance && "donorStatus" in value;
    isInstance = isInstance && "donationAgg" in value;
    isInstance = isInstance && "isRequestUser" in value;

    return isInstance;
}

export function UserTopFromJSON(json: any): UserTop {
    return UserTopFromJSONTyped(json, false);
}

export function UserTopFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTop {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'firstName': json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'middleName': !exists(json, 'middle_name') ? undefined : json['middle_name'],
        'bloodGroup': json['blood_group'],
        'photo': InlinePictureFromJSON(json['photo']),
        'legacyAvatar': json['legacy_avatar'],
        'honorDonor': !exists(json, 'honor_donor') ? undefined : json['honor_donor'],
        'count': json['count'],
        'countBs': json['count_bs'],
        'countBlood': json['count_blood'],
        'countPlasma': json['count_plasma'],
        'countLeukocytes': json['count_leukocytes'],
        'countErythrocytes': json['count_erythrocytes'],
        'countPlatelets': json['count_platelets'],
        'donorStatus': DonorStatusFromJSON(json['donor_status']),
        'donationAgg': MainPageDonationAggTopFromJSON(json['donation_agg']),
        'isRequestUser': json['is_request_user'],
    };
}

export function UserTopToJSON(value?: UserTop | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'middle_name': value.middleName,
        'honor_donor': value.honorDonor,
    };
}

