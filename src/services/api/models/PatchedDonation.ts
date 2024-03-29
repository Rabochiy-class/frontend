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
import type { BloodStationSmall } from './BloodStationSmall';
import {
    BloodStationSmallFromJSON,
    BloodStationSmallFromJSONTyped,
    BloodStationSmallToJSON,
} from './BloodStationSmall';
import type { City } from './City';
import {
    CityFromJSON,
    CityFromJSONTyped,
    CityToJSON,
} from './City';
import type { InlinePicture } from './InlinePicture';
import {
    InlinePictureFromJSON,
    InlinePictureFromJSONTyped,
    InlinePictureToJSON,
} from './InlinePicture';
import type { PatchedDonationRejectReason } from './PatchedDonationRejectReason';
import {
    PatchedDonationRejectReasonFromJSON,
    PatchedDonationRejectReasonFromJSONTyped,
    PatchedDonationRejectReasonToJSON,
} from './PatchedDonationRejectReason';
import type { PaymentTypeEnum } from './PaymentTypeEnum';
import {
    PaymentTypeEnumFromJSON,
    PaymentTypeEnumFromJSONTyped,
    PaymentTypeEnumToJSON,
} from './PaymentTypeEnum';
import type { Status73fEnum } from './Status73fEnum';
import {
    Status73fEnumFromJSON,
    Status73fEnumFromJSONTyped,
    Status73fEnumToJSON,
} from './Status73fEnum';

/**
 * 
 * @export
 * @interface PatchedDonation
 */
export interface PatchedDonation {
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    bloodStationId?: number | null;
    /**
     * 
     * @type {BloodStationSmall}
     * @memberof PatchedDonation
     */
    readonly bloodStation?: BloodStationSmall;
    /**
     * 
     * @type {InlinePicture}
     * @memberof PatchedDonation
     */
    readonly image?: InlinePicture;
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    imageId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    cityId?: number;
    /**
     * 
     * @type {City}
     * @memberof PatchedDonation
     */
    readonly city?: City;
    /**
     * 
     * @type {string}
     * @memberof PatchedDonation
     */
    readonly legacyImage?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedDonation
     */
    readonly hasReply?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedDonation
     */
    readonly replyViewed?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedDonation
     */
    readonly allowedModify?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedDonation
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedDonation
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {Status73fEnum}
     * @memberof PatchedDonation
     */
    readonly status?: Status73fEnum;
    /**
     * 
     * @type {PatchedDonationRejectReason}
     * @memberof PatchedDonation
     */
    rejectReason?: PatchedDonationRejectReason | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedDonation
     */
    donateAt?: Date;
    /**
     * 
     * @type {BloodClassF07Enum}
     * @memberof PatchedDonation
     */
    bloodClass?: BloodClassF07Enum;
    /**
     * 
     * @type {PaymentTypeEnum}
     * @memberof PatchedDonation
     */
    paymentType?: PaymentTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedDonation
     */
    isOut?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    paymentCost?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedDonation
     */
    onModerationDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedDonation
     */
    withImage?: boolean;
    /**
     * Данная запись сгенерирована с помощью модуля распознования справок
     * @type {boolean}
     * @memberof PatchedDonation
     */
    createdUsingOcr?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedDonation
     */
    readonly user?: number;
}

/**
 * Check if a given object implements the PatchedDonation interface.
 */
export function instanceOfPatchedDonation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedDonationFromJSON(json: any): PatchedDonation {
    return PatchedDonationFromJSONTyped(json, false);
}

export function PatchedDonationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedDonation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'bloodStationId': !exists(json, 'blood_station_id') ? undefined : json['blood_station_id'],
        'bloodStation': !exists(json, 'blood_station') ? undefined : BloodStationSmallFromJSON(json['blood_station']),
        'image': !exists(json, 'image') ? undefined : InlinePictureFromJSON(json['image']),
        'imageId': !exists(json, 'image_id') ? undefined : json['image_id'],
        'cityId': !exists(json, 'city_id') ? undefined : json['city_id'],
        'city': !exists(json, 'city') ? undefined : CityFromJSON(json['city']),
        'legacyImage': !exists(json, 'legacy_image') ? undefined : json['legacy_image'],
        'hasReply': !exists(json, 'has_reply') ? undefined : json['has_reply'],
        'replyViewed': !exists(json, 'reply_viewed') ? undefined : json['reply_viewed'],
        'allowedModify': !exists(json, 'allowed_modify') ? undefined : json['allowed_modify'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'status': !exists(json, 'status') ? undefined : Status73fEnumFromJSON(json['status']),
        'rejectReason': !exists(json, 'reject_reason') ? undefined : PatchedDonationRejectReasonFromJSON(json['reject_reason']),
        'donateAt': !exists(json, 'donate_at') ? undefined : (new Date(json['donate_at'])),
        'bloodClass': !exists(json, 'blood_class') ? undefined : BloodClassF07EnumFromJSON(json['blood_class']),
        'paymentType': !exists(json, 'payment_type') ? undefined : PaymentTypeEnumFromJSON(json['payment_type']),
        'isOut': !exists(json, 'is_out') ? undefined : json['is_out'],
        'volume': !exists(json, 'volume') ? undefined : json['volume'],
        'paymentCost': !exists(json, 'payment_cost') ? undefined : json['payment_cost'],
        'onModerationDate': !exists(json, 'on_moderation_date') ? undefined : (json['on_moderation_date'] === null ? null : new Date(json['on_moderation_date'])),
        'withImage': !exists(json, 'with_image') ? undefined : json['with_image'],
        'createdUsingOcr': !exists(json, 'created_using_ocr') ? undefined : json['created_using_ocr'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function PatchedDonationToJSON(value?: PatchedDonation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blood_station_id': value.bloodStationId,
        'image_id': value.imageId,
        'city_id': value.cityId,
        'reject_reason': PatchedDonationRejectReasonToJSON(value.rejectReason),
        'donate_at': value.donateAt === undefined ? undefined : (value.donateAt.toISOString().substring(0,10)),
        'blood_class': BloodClassF07EnumToJSON(value.bloodClass),
        'payment_type': PaymentTypeEnumToJSON(value.paymentType),
        'is_out': value.isOut,
        'volume': value.volume,
        'payment_cost': value.paymentCost,
        'on_moderation_date': value.onModerationDate === undefined ? undefined : (value.onModerationDate === null ? null : value.onModerationDate.toISOString().substring(0,10)),
        'with_image': value.withImage,
        'created_using_ocr': value.createdUsingOcr,
    };
}

