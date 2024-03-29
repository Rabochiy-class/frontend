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
 * @interface DonationCreate
 */
export interface DonationCreate {
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    bloodStationId?: number | null;
    /**
     * 
     * @type {BloodStationSmall}
     * @memberof DonationCreate
     */
    readonly bloodStation: BloodStationSmall;
    /**
     * 
     * @type {InlinePicture}
     * @memberof DonationCreate
     */
    readonly image: InlinePicture;
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    imageId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    cityId: number;
    /**
     * 
     * @type {City}
     * @memberof DonationCreate
     */
    readonly city: City;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    readonly legacyImage: string;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    readonly hasReply: string;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    readonly replyViewed: string;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    readonly allowedModify: string;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DonationCreate
     */
    middleName?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof DonationCreate
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof DonationCreate
     */
    readonly updatedAt: Date;
    /**
     * 
     * @type {Status73fEnum}
     * @memberof DonationCreate
     */
    readonly status: Status73fEnum;
    /**
     * 
     * @type {PatchedDonationRejectReason}
     * @memberof DonationCreate
     */
    rejectReason: PatchedDonationRejectReason | null;
    /**
     * 
     * @type {Date}
     * @memberof DonationCreate
     */
    donateAt: Date;
    /**
     * 
     * @type {BloodClassF07Enum}
     * @memberof DonationCreate
     */
    bloodClass?: BloodClassF07Enum;
    /**
     * 
     * @type {PaymentTypeEnum}
     * @memberof DonationCreate
     */
    paymentType?: PaymentTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof DonationCreate
     */
    isOut?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    volume?: number;
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    paymentCost?: number;
    /**
     * 
     * @type {Date}
     * @memberof DonationCreate
     */
    onModerationDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof DonationCreate
     */
    withImage?: boolean;
    /**
     * Данная запись сгенерирована с помощью модуля распознования справок
     * @type {boolean}
     * @memberof DonationCreate
     */
    createdUsingOcr?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DonationCreate
     */
    readonly user: number;
}

/**
 * Check if a given object implements the DonationCreate interface.
 */
export function instanceOfDonationCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "bloodStation" in value;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "cityId" in value;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "legacyImage" in value;
    isInstance = isInstance && "hasReply" in value;
    isInstance = isInstance && "replyViewed" in value;
    isInstance = isInstance && "allowedModify" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "rejectReason" in value;
    isInstance = isInstance && "donateAt" in value;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function DonationCreateFromJSON(json: any): DonationCreate {
    return DonationCreateFromJSONTyped(json, false);
}

export function DonationCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'bloodStationId': !exists(json, 'blood_station_id') ? undefined : json['blood_station_id'],
        'bloodStation': BloodStationSmallFromJSON(json['blood_station']),
        'image': InlinePictureFromJSON(json['image']),
        'imageId': !exists(json, 'image_id') ? undefined : json['image_id'],
        'cityId': json['city_id'],
        'city': CityFromJSON(json['city']),
        'legacyImage': json['legacy_image'],
        'hasReply': json['has_reply'],
        'replyViewed': json['reply_viewed'],
        'allowedModify': json['allowed_modify'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'middleName': !exists(json, 'middle_name') ? undefined : json['middle_name'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'status': Status73fEnumFromJSON(json['status']),
        'rejectReason': PatchedDonationRejectReasonFromJSON(json['reject_reason']),
        'donateAt': (new Date(json['donate_at'])),
        'bloodClass': !exists(json, 'blood_class') ? undefined : BloodClassF07EnumFromJSON(json['blood_class']),
        'paymentType': !exists(json, 'payment_type') ? undefined : PaymentTypeEnumFromJSON(json['payment_type']),
        'isOut': !exists(json, 'is_out') ? undefined : json['is_out'],
        'volume': !exists(json, 'volume') ? undefined : json['volume'],
        'paymentCost': !exists(json, 'payment_cost') ? undefined : json['payment_cost'],
        'onModerationDate': !exists(json, 'on_moderation_date') ? undefined : (json['on_moderation_date'] === null ? null : new Date(json['on_moderation_date'])),
        'withImage': !exists(json, 'with_image') ? undefined : json['with_image'],
        'createdUsingOcr': !exists(json, 'created_using_ocr') ? undefined : json['created_using_ocr'],
        'user': json['user'],
    };
}

export function DonationCreateToJSON(value?: DonationCreate | null): any {
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
        'first_name': value.firstName,
        'last_name': value.lastName,
        'middle_name': value.middleName,
        'reject_reason': PatchedDonationRejectReasonToJSON(value.rejectReason),
        'donate_at': (value.donateAt.toISOString().substring(0,10)),
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

