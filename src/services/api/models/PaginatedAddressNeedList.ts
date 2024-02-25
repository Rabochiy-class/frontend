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
import type { AddressNeed } from './AddressNeed';
import {
    AddressNeedFromJSON,
    AddressNeedFromJSONTyped,
    AddressNeedToJSON,
} from './AddressNeed';

/**
 * 
 * @export
 * @interface PaginatedAddressNeedList
 */
export interface PaginatedAddressNeedList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedAddressNeedList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAddressNeedList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAddressNeedList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<AddressNeed>}
     * @memberof PaginatedAddressNeedList
     */
    results?: Array<AddressNeed>;
}

/**
 * Check if a given object implements the PaginatedAddressNeedList interface.
 */
export function instanceOfPaginatedAddressNeedList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedAddressNeedListFromJSON(json: any): PaginatedAddressNeedList {
    return PaginatedAddressNeedListFromJSONTyped(json, false);
}

export function PaginatedAddressNeedListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedAddressNeedList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(AddressNeedFromJSON)),
    };
}

export function PaginatedAddressNeedListToJSON(value?: PaginatedAddressNeedList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(AddressNeedToJSON)),
    };
}
