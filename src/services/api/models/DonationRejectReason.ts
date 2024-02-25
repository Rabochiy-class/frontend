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

import type { BlankEnum } from './BlankEnum';
import {
    BlankEnumFromJSON,
    BlankEnumFromJSONTyped,
    BlankEnumToJSON,
} from './BlankEnum';
import type { NullEnum } from './NullEnum';
import {
    NullEnumFromJSON,
    NullEnumFromJSONTyped,
    NullEnumToJSON,
} from './NullEnum';

/**
 * @type DonationRejectReason
 * 
 * @export
 */
export type DonationRejectReason = BlankEnum | NullEnum;

export function DonationRejectReasonFromJSON(json: any): DonationRejectReason {
    return DonationRejectReasonFromJSONTyped(json, false);
}

export function DonationRejectReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonationRejectReason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return json;
}

export function DonationRejectReasonToJSON(value?: DonationRejectReason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return {};
}
