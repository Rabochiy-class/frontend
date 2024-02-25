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
  Donation,
  DonationCreate,
  DonationDetail,
  PaginatedDonationList,
  PatchedDonation,
} from '../models/index';
import {
    DonationFromJSON,
    DonationToJSON,
    DonationCreateFromJSON,
    DonationCreateToJSON,
    DonationDetailFromJSON,
    DonationDetailToJSON,
    PaginatedDonationListFromJSON,
    PaginatedDonationListToJSON,
    PatchedDonationFromJSON,
    PatchedDonationToJSON,
} from '../models/index';

export interface DonationsCreateRequest {
    donationCreate: DonationCreate;
}

export interface DonationsDestroyRequest {
    id: number;
}

export interface DonationsIsExistsRetrieveRequest {
    donateAt?: string;
}

export interface DonationsListRequest {
    donateAtGte?: Date;
    ordering?: string;
    page?: number;
    pageSize?: number;
    search?: string;
    status?: string;
}

export interface DonationsPartialUpdateRequest {
    id: number;
    patchedDonation?: PatchedDonation;
}

export interface DonationsRetrieveRequest {
    id: number;
}

export interface DonationsUpdateRequest {
    id: number;
    donation: Donation;
}

/**
 * 
 */
export class DonationManagementApi extends runtime.BaseAPI {

    /**
     * Allows an authenticated user to create a new donation record.
     * Create a Donation
     */
    async donationsCreateRaw(requestParameters: DonationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DonationCreate>> {
        if (requestParameters.donationCreate === null || requestParameters.donationCreate === undefined) {
            throw new runtime.RequiredError('donationCreate','Required parameter requestParameters.donationCreate was null or undefined when calling donationsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/donations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DonationCreateToJSON(requestParameters.donationCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DonationCreateFromJSON(jsonValue));
    }

    /**
     * Allows an authenticated user to create a new donation record.
     * Create a Donation
     */
    async donationsCreate(requestParameters: DonationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DonationCreate> {
        const response = await this.donationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Soft deletes a donation made by the authenticated user.
     * Delete a Donation
     */
    async donationsDestroyRaw(requestParameters: DonationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling donationsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/donations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Soft deletes a donation made by the authenticated user.
     * Delete a Donation
     */
    async donationsDestroy(requestParameters: DonationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.donationsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * Checks if a donation by the authenticated user exists on a given date.
     * Check if Donation Exists on a Specific Date
     */
    async donationsIsExistsRetrieveRaw(requestParameters: DonationsIsExistsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.donateAt !== undefined) {
            queryParameters['donate_at'] = requestParameters.donateAt;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/donations/is-exists`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Checks if a donation by the authenticated user exists on a given date.
     * Check if Donation Exists on a Specific Date
     */
    async donationsIsExistsRetrieve(requestParameters: DonationsIsExistsRetrieveRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.donationsIsExistsRetrieveRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a list of donations made by the authenticated user, excluding deleted donations.
     * List User Donations
     */
    async donationsListRaw(requestParameters: DonationsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedDonationList>> {
        const queryParameters: any = {};

        if (requestParameters.donateAtGte !== undefined) {
            queryParameters['donate_at__gte'] = (requestParameters.donateAtGte as any).toISOString().substring(0,10);
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

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/donations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedDonationListFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of donations made by the authenticated user, excluding deleted donations.
     * List User Donations
     */
    async donationsList(requestParameters: DonationsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedDonationList> {
        const response = await this.donationsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows an authenticated user to update an existing donation record.
     * Update a Donation
     */
    async donationsPartialUpdateRaw(requestParameters: DonationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Donation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling donationsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/donations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedDonationToJSON(requestParameters.patchedDonation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DonationFromJSON(jsonValue));
    }

    /**
     * Allows an authenticated user to update an existing donation record.
     * Update a Donation
     */
    async donationsPartialUpdate(requestParameters: DonationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Donation> {
        const response = await this.donationsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get detailed information about a specific donation made by the authenticated user.
     * Retrieve Donation Details
     */
    async donationsRetrieveRaw(requestParameters: DonationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DonationDetail>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling donationsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/donations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DonationDetailFromJSON(jsonValue));
    }

    /**
     * Get detailed information about a specific donation made by the authenticated user.
     * Retrieve Donation Details
     */
    async donationsRetrieve(requestParameters: DonationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DonationDetail> {
        const response = await this.donationsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows an authenticated user to update an existing donation record.
     * Update a Donation
     */
    async donationsUpdateRaw(requestParameters: DonationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Donation>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling donationsUpdate.');
        }

        if (requestParameters.donation === null || requestParameters.donation === undefined) {
            throw new runtime.RequiredError('donation','Required parameter requestParameters.donation was null or undefined when calling donationsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/donations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DonationToJSON(requestParameters.donation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DonationFromJSON(jsonValue));
    }

    /**
     * Allows an authenticated user to update an existing donation record.
     * Update a Donation
     */
    async donationsUpdate(requestParameters: DonationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Donation> {
        const response = await this.donationsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}