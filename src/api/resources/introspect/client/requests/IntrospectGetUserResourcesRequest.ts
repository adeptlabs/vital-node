/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../..";

/**
 * @example
 *     {}
 */
export interface IntrospectGetUserResourcesRequest {
    userId?: string;
    provider?: Vital.Providers;
    userLimit?: number;
    cursor?: string;
    /**
     * The cursor for fetching the next page, or `null` to fetch the first page.
     */
    nextCursor?: string;
}
