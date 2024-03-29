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
import type { Country } from './Country';
import {
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
} from './Country';
import type { Region } from './Region';
import {
    RegionFromJSON,
    RegionFromJSONTyped,
    RegionToJSON,
} from './Region';

/**
 * 
 * @export
 * @interface City
 */
export interface City {
    /**
     * 
     * @type {number}
     * @memberof City
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof City
     */
    title: string;
    /**
     * Строковый идентификатор сущности.
     * @type {string}
     * @memberof City
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof City
     */
    regionId: number;
    /**
     * 
     * @type {Region}
     * @memberof City
     */
    readonly region: Region;
    /**
     * 
     * @type {Country}
     * @memberof City
     */
    readonly country: Country;
    /**
     * 
     * @type {number}
     * @memberof City
     */
    priority?: number;
    /**
     * 
     * @type {string}
     * @memberof City
     */
    readonly lat: string;
    /**
     * 
     * @type {string}
     * @memberof City
     */
    readonly lng: string;
}

/**
 * Check if a given object implements the City interface.
 */
export function instanceOfCity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "regionId" in value;
    isInstance = isInstance && "region" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lng" in value;

    return isInstance;
}

export function CityFromJSON(json: any): City {
    return CityFromJSONTyped(json, false);
}

export function CityFromJSONTyped(json: any, ignoreDiscriminator: boolean): City {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'regionId': json['region_id'],
        'region': RegionFromJSON(json['region']),
        'country': CountryFromJSON(json['country']),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'lat': json['lat'],
        'lng': json['lng'],
    };
}

export function CityToJSON(value?: City | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'slug': value.slug,
        'region_id': value.regionId,
        'priority': value.priority,
    };
}

