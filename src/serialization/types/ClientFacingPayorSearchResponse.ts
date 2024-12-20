/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";

export const ClientFacingPayorSearchResponse: core.serialization.ObjectSchema<
    serializers.ClientFacingPayorSearchResponse.Raw,
    Vital.ClientFacingPayorSearchResponse
> = core.serialization.object({
    payorCode: core.serialization.property("payor_code", core.serialization.string()),
    name: core.serialization.string(),
    aliases: core.serialization.list(core.serialization.string()),
    orgAddress: core.serialization.property("org_address", Address),
});

export declare namespace ClientFacingPayorSearchResponse {
    interface Raw {
        payor_code: string;
        name: string;
        aliases: string[];
        org_address: Address.Raw;
    }
}
