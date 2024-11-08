/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         token: "token"
 *     }
 */
export interface LinkTokenBase {
    token: string;
    isUsed?: boolean;
    oauthInfo?: Record<string, unknown>;
    requirements?: Vital.LinkRequirements;
}
