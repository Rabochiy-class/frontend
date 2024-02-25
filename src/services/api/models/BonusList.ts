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
 * @interface BonusList
 */
export interface BonusList {
    /**
     * 
     * @type {number}
     * @memberof BonusList
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof BonusList
     */
    bonusImage: string;
    /**
     * 
     * @type {string}
     * @memberof BonusList
     */
    partnerImage: string;
    /**
     * 
     * @type {string}
     * @memberof BonusList
     */
    readonly isTaken: string;
    /**
     * Максимум 48 символов
     * @type {string}
     * @memberof BonusList
     */
    bonusName: string;
    /**
     * Максимум 29 символов
     * @type {string}
     * @memberof BonusList
     */
    partnerName: string;
    /**
     * 
     * @type {Date}
     * @memberof BonusList
     */
    dateValidity: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BonusList
     */
    isPublished?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BonusList
     */
    h: number;
    /**
     * 
     * @type {number}
     * @memberof BonusList
     */
    w: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BonusList
     */
    cities?: Array<number>;
    /**
     * Чем больше число, тем выше в списке
     * @type {number}
     * @memberof BonusList
     */
    priority?: number;
}

/**
 * Check if a given object implements the BonusList interface.
 */
export function instanceOfBonusList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "bonusImage" in value;
    isInstance = isInstance && "partnerImage" in value;
    isInstance = isInstance && "isTaken" in value;
    isInstance = isInstance && "bonusName" in value;
    isInstance = isInstance && "partnerName" in value;
    isInstance = isInstance && "dateValidity" in value;
    isInstance = isInstance && "h" in value;
    isInstance = isInstance && "w" in value;

    return isInstance;
}

export function BonusListFromJSON(json: any): BonusList {
    return BonusListFromJSONTyped(json, false);
}

export function BonusListFromJSONTyped(json: any, ignoreDiscriminator: boolean): BonusList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'bonusImage': json['bonus_image'],
        'partnerImage': json['partner_image'],
        'isTaken': json['is_taken'],
        'bonusName': json['bonus_name'],
        'partnerName': json['partner_name'],
        'dateValidity': (new Date(json['date_validity'])),
        'isPublished': !exists(json, 'is_published') ? undefined : json['is_published'],
        'h': json['h'],
        'w': json['w'],
        'cities': !exists(json, 'cities') ? undefined : json['cities'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
    };
}

export function BonusListToJSON(value?: BonusList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bonus_image': value.bonusImage,
        'partner_image': value.partnerImage,
        'bonus_name': value.bonusName,
        'partner_name': value.partnerName,
        'date_validity': (value.dateValidity.toISOString().substring(0,10)),
        'is_published': value.isPublished,
        'h': value.h,
        'w': value.w,
        'cities': value.cities,
        'priority': value.priority,
    };
}
