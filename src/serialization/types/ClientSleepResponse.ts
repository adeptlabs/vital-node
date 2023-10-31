/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientSleepResponse: core.serialization.ObjectSchema<
    serializers.ClientSleepResponse.Raw,
    Vital.ClientSleepResponse
> = core.serialization.object({
    sleep: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).ClientFacingSleep)),
});

export declare namespace ClientSleepResponse {
    interface Raw {
        sleep: serializers.ClientFacingSleep.Raw[];
    }
}
