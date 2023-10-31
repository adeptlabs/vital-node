/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vital from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.vitals.ige.Response.Raw,
    Vital.ClientFacingIgeTimeseries[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).ClientFacingIgeTimeseries)
);

export declare namespace Response {
    type Raw = serializers.ClientFacingIgeTimeseries.Raw[];
}
