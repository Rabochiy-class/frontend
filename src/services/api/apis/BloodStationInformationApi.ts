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


import * as runtime from '../runtime';
import type {
  BloodStationWithNeeds,
  PaginatedBloodStationWithNeedsList,
} from '../models/index';
import {
    BloodStationWithNeedsFromJSON,
    BloodStationWithNeedsToJSON,
    PaginatedBloodStationWithNeedsListFromJSON,
    PaginatedBloodStationWithNeedsListToJSON,
} from '../models/index';

export interface BloodStationsListRequest {
    bloodGroup?: string;
    cityId?: number;
    citySlug?: string;
    closed?: boolean;
    forMoscow?: boolean;
    openOnSaturday?: boolean;
    openOnSunday?: boolean;
    ordering?: string;
    page?: number;
    pageSize?: number;
    q?: string;
    search?: string;
    withTyping?: boolean;
    withoutRegistration?: boolean;
}

export interface BloodStationsRetrieveRequest {
    id: number;
}

/**
 * 
 */
export class BloodStationInformationApi extends runtime.BaseAPI {

    /**
     * Retrieves a list of all blood stations along with detailed information.
     * List All Blood Stations
     */
    async bloodStationsListRaw(requestParameters: BloodStationsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedBloodStationWithNeedsList>> {
        const queryParameters: any = {};

        if (requestParameters.bloodGroup !== undefined) {
            queryParameters['blood_group'] = requestParameters.bloodGroup;
        }

        if (requestParameters.cityId !== undefined) {
            queryParameters['city_id'] = requestParameters.cityId;
        }

        if (requestParameters.citySlug !== undefined) {
            queryParameters['city_slug'] = requestParameters.citySlug;
        }

        if (requestParameters.closed !== undefined) {
            queryParameters['closed'] = requestParameters.closed;
        }

        if (requestParameters.forMoscow !== undefined) {
            queryParameters['for_moscow'] = requestParameters.forMoscow;
        }

        if (requestParameters.openOnSaturday !== undefined) {
            queryParameters['open_on_saturday'] = requestParameters.openOnSaturday;
        }

        if (requestParameters.openOnSunday !== undefined) {
            queryParameters['open_on_sunday'] = requestParameters.openOnSunday;
        }

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.withTyping !== undefined) {
            queryParameters['with_typing'] = requestParameters.withTyping;
        }

        if (requestParameters.withoutRegistration !== undefined) {
            queryParameters['without_registration'] = requestParameters.withoutRegistration;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/blood_stations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedBloodStationWithNeedsListFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of all blood stations along with detailed information.
     * List All Blood Stations
     */
    async bloodStationsList(requestParameters: BloodStationsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedBloodStationWithNeedsList> {
        const response = await this.bloodStationsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves detailed information about a specific blood station.
     * Retrieve Specific Blood Station Details
     */
    async bloodStationsRetrieveRaw(requestParameters: BloodStationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BloodStationWithNeeds>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bloodStationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/blood_stations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BloodStationWithNeedsFromJSON(jsonValue));
    }

    /**
     * Retrieves detailed information about a specific blood station.
     * Retrieve Specific Blood Station Details
     */
    async bloodStationsRetrieve(requestParameters: BloodStationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BloodStationWithNeeds> {
        const response = await this.bloodStationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
