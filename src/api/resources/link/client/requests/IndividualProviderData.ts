/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         username: "username",
 *         password: "password"
 *     }
 */
export interface IndividualProviderData {
    vitalLinkToken?: string;
    /** Username for provider */
    username: string;
    /** Password for provider */
    password: string;
    region?: Vital.Region;
}
