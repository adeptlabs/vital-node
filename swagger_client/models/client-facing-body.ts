/* tslint:disable */
/* eslint-disable */
/**
 * Vital
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ClientFacingBody
 */
export interface ClientFacingBody {
    /**
     * 
     * @type {string}
     * @memberof ClientFacingBody
     */
    id: any;
    /**
     * Date for specified record
     * @type {Date}
     * @memberof ClientFacingBody
     */
    date: any;
    /**
     * Weight in kg.::kg
     * @type {number}
     * @memberof ClientFacingBody
     */
    weight: any;
    /**
     * Body fat percentage.::perc
     * @type {number}
     * @memberof ClientFacingBody
     */
    fat?: any;
    /**
     * Age of user.::years
     * @type {number}
     * @memberof ClientFacingBody
     */
    age?: any;
    /**
     * Height in cm.::cm
     * @type {number}
     * @memberof ClientFacingBody
     */
    height?: any;
    /**
     * Gender of user.
     * @type {string}
     * @memberof ClientFacingBody
     */
    gender?: any;
    /**
     * Source the data has come from.
     * @type {SourceClientFacing}
     * @memberof ClientFacingBody
     */
    source: any;
    /**
     * User key returned by vital create user key request. This key should be stored in your database against the user and used for all interactions with the vital api.
     * @type {string}
     * @memberof ClientFacingBody
     */
    userId: any;
}
