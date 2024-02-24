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
import type { BloodClassF07Enum } from './BloodClassF07Enum';
import {
    BloodClassF07EnumFromJSON,
    BloodClassF07EnumFromJSONTyped,
    BloodClassF07EnumToJSON,
} from './BloodClassF07Enum';
import type { BloodStation } from './BloodStation';
import {
    BloodStationFromJSON,
    BloodStationFromJSONTyped,
    BloodStationToJSON,
} from './BloodStation';
import type { City } from './City';
import {
    CityFromJSON,
    CityFromJSONTyped,
    CityToJSON,
} from './City';
import type { DonationPlanPaymentType } from './DonationPlanPaymentType';
import {
    DonationPlanPaymentTypeFromJSON,
    DonationPlanPaymentTypeFromJSONTyped,
    DonationPlanPaymentTypeToJSON,
} from './DonationPlanPaymentType';
import type { DonationPlanStatusEnum } from './DonationPlanStatusEnum';
import {
    DonationPlanStatusEnumFromJSON,
    DonationPlanStatusEnumFromJSONTyped,
    DonationPlanStatusEnumToJSON,
} from './DonationPlanStatusEnum';

/**
 * 
 * @export
 * @interface DonationPlan
 */
export interface DonationPlan {
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof DonationPlan
     */
    readonly event: string;
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    bloodStationId?: number | null;
    /**
     * 
     * @type {BloodStation}
     * @memberof DonationPlan
     */
    readonly bloodStation: BloodStation;
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    cityId?: number | null;
    /**
     * 
     * @type {City}
     * @memberof DonationPlan
     */
    readonly city: City;
    /**
     * 
     * @type {Date}
     * @memberof DonationPlan
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof DonationPlan
     */
    readonly updatedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    objectId?: number | null;
    /**
     * 
     * @type {BloodClassF07Enum}
     * @memberof DonationPlan
     */
    bloodClass?: BloodClassF07Enum;
    /**
     * 
     * @type {Date}
     * @memberof DonationPlan
     */
    planDate: Date;
    /**
     * 
     * @type {DonationPlanPaymentType}
     * @memberof DonationPlan
     */
    paymentType?: DonationPlanPaymentType | null;
    /**
     * 
     * @type {DonationPlanStatusEnum}
     * @memberof DonationPlan
     */
    status?: DonationPlanStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof DonationPlan
     */
    isOut?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    readonly user: number;
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    contentType?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DonationPlan
     */
    donation?: number | null;
}

/**
 * Check if a given object implements the DonationPlan interface.
 */
export function instanceOfDonationPlan(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "event" in value;
    isInstance = isInstance && "bloodStation" in value;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "planDate" in value;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function DonationPlanFromJSON(json: any): DonationPlan {
    return DonationPlanFromJSONTyped(json, false);
}

export function DonationPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationPlan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'event': json['event'],
        'bloodStationId': !exists(json, 'blood_station_id') ? undefined : json['blood_station_id'],
        'bloodStation': BloodStationFromJSON(json['blood_station']),
        'cityId': !exists(json, 'city_id') ? undefined : json['city_id'],
        'city': CityFromJSON(json['city']),
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'objectId': !exists(json, 'object_id') ? undefined : json['object_id'],
        'bloodClass': !exists(json, 'blood_class') ? undefined : BloodClassF07EnumFromJSON(json['blood_class']),
        'planDate': (new Date(json['plan_date'])),
        'paymentType': !exists(json, 'payment_type') ? undefined : DonationPlanPaymentTypeFromJSON(json['payment_type']),
        'status': !exists(json, 'status') ? undefined : DonationPlanStatusEnumFromJSON(json['status']),
        'isOut': !exists(json, 'is_out') ? undefined : json['is_out'],
        'user': json['user'],
        'contentType': !exists(json, 'content_type') ? undefined : json['content_type'],
        'donation': !exists(json, 'donation') ? undefined : json['donation'],
    };
}

export function DonationPlanToJSON(value?: DonationPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blood_station_id': value.bloodStationId,
        'city_id': value.cityId,
        'object_id': value.objectId,
        'blood_class': BloodClassF07EnumToJSON(value.bloodClass),
        'plan_date': (value.planDate.toISOString().substring(0,10)),
        'payment_type': DonationPlanPaymentTypeToJSON(value.paymentType),
        'status': DonationPlanStatusEnumToJSON(value.status),
        'is_out': value.isOut,
        'content_type': value.contentType,
        'donation': value.donation,
    };
}

