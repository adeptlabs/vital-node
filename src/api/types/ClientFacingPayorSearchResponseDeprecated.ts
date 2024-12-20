/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingPayorSearchResponseDeprecated {
    /** Payor code returned for the insurance information. */
    code: string;
    /** Insurance name returned for the insurance information. */
    name: string;
    /** Insurance name aliases returned for the insurance information. */
    aliases: string[];
    /** Insurance business address returned for the insurance information. */
    orgAddress: Vital.Address;
}
