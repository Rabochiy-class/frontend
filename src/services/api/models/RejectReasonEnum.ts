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


/**
 * * `photo1` - Фотография имеет неразборчивое отображение
 * * `photo2` - Необходима справка по формам 402/у, 405-05/у или 448-05/у
 * * `date` - Расставьте верно даты донаций в профиле
 * * `date2` - Создайте нужное число донаций с датами согласно приложенной справке
 * * `need_screenshot` - Сделайте скриншот каждой донации в Госуслугах, где видны ФИО, дата, тип и номер донации
 * * `wrong_fio` - ФИО на справке и в профиле не совпадает
 * @export
 */
export const RejectReasonEnum = {
    Photo1: 'photo1',
    Photo2: 'photo2',
    Date: 'date',
    Date2: 'date2',
    NeedScreenshot: 'need_screenshot',
    WrongFio: 'wrong_fio'
} as const;
export type RejectReasonEnum = typeof RejectReasonEnum[keyof typeof RejectReasonEnum];


export function RejectReasonEnumFromJSON(json: any): RejectReasonEnum {
    return RejectReasonEnumFromJSONTyped(json, false);
}

export function RejectReasonEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RejectReasonEnum {
    return json as RejectReasonEnum;
}

export function RejectReasonEnumToJSON(value?: RejectReasonEnum | null): any {
    return value as any;
}

