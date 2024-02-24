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
  PaginatedDonationPlanList,
} from '../models/index';
import {
    PaginatedDonationPlanListFromJSON,
    PaginatedDonationPlanListToJSON,
} from '../models/index';

export interface DonationPlanListRequest {
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
}

/**
 * 
 */
export class DonationPlanManagementApi extends runtime.BaseAPI {

    /**
     * Retrieves a list of donation plans created by the authenticated user, excluding aborted plans.
     * List Donation Plans
     */
    async donationPlanListRaw(requestParameters: DonationPlanListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedDonationPlanList>> {
        const queryParameters: any = {};

        if (requestParameters.ordering !== undefined) {
            queryParameters['ordering'] = requestParameters.ordering;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/donation_plan`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedDonationPlanListFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of donation plans created by the authenticated user, excluding aborted plans.
     * List Donation Plans
     */
    async donationPlanList(requestParameters: DonationPlanListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedDonationPlanList> {
        const response = await this.donationPlanListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}