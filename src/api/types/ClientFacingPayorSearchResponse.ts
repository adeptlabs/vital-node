/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ClientFacingPayorSearchResponse {
    /** Payor code returned for the insurance information required by Labcorp. */
    code: string;
    /** Insurance name returned for the insurance information required by Labcorp. */
    name: string;
    /** Insurance business address returned for the insurance information required by Labcorp. */
    orgAddress: Vital.Address;
}
