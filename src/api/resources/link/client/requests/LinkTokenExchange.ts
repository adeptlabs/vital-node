/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../..";

/**
 * @example
 *     {
 *         userId: "user_id"
 *     }
 */
export interface LinkTokenExchange {
    /** User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api. */
    userId: string;
    provider?: Vital.Providers;
    redirectUrl?: string;
    filterOnProviders?: Vital.Providers[];
}
