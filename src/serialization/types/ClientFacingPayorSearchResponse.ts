/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingPayorSearchResponse: core.serialization.ObjectSchema<
    serializers.ClientFacingPayorSearchResponse.Raw,
    Vital.ClientFacingPayorSearchResponse
> = core.serialization.object({
    code: core.serialization.string(),
    name: core.serialization.string(),
    orgAddress: core.serialization.property(
        "org_address",
        core.serialization.lazyObject(async () => (await import("..")).Address)
    ),
});

export declare namespace ClientFacingPayorSearchResponse {
    interface Raw {
        code: string;
        name: string;
        org_address: serializers.Address.Raw;
    }
}
