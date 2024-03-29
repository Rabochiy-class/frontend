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
import type { DonorCardBloodGroupEnum } from './DonorCardBloodGroupEnum';
import {
    DonorCardBloodGroupEnumFromJSON,
    DonorCardBloodGroupEnumFromJSONTyped,
    DonorCardBloodGroupEnumToJSON,
} from './DonorCardBloodGroupEnum';
import type { NullEnum } from './NullEnum';
import {
    NullEnumFromJSON,
    NullEnumFromJSONTyped,
    NullEnumToJSON,
} from './NullEnum';

/**
 * @type PatchedDonorCardBloodGroup
 * 
 * @export
 */
export type PatchedDonorCardBloodGroup = BlankEnum | DonorCardBloodGroupEnum | NullEnum;

export function PatchedDonorCardBloodGroupFromJSON(json: any): PatchedDonorCardBloodGroup {
    return PatchedDonorCardBloodGroupFromJSONTyped(json, false);
}

export function PatchedDonorCardBloodGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedDonorCardBloodGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return json
}

export function PatchedDonorCardBloodGroupToJSON(value?: PatchedDonorCardBloodGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    return value
}

