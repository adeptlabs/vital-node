/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientBodyResponse: core.serialization.ObjectSchema<
    serializers.ClientBodyResponse.Raw,
    Vital.ClientBodyResponse
> = core.serialization.object({
    body: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).ClientFacingBody)),
});

export declare namespace ClientBodyResponse {
    interface Raw {
        body: serializers.ClientFacingBody.Raw[];
    }
}
