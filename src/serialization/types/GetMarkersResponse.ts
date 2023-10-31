/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GetMarkersResponse: core.serialization.ObjectSchema<
    serializers.GetMarkersResponse.Raw,
    Vital.GetMarkersResponse
> = core.serialization.object({
    markers: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingMarker)
    ),
    total: core.serialization.number(),
    page: core.serialization.number(),
    size: core.serialization.number(),
});

export declare namespace GetMarkersResponse {
    interface Raw {
        markers: serializers.ClientFacingMarker.Raw[];
        total: number;
        page: number;
        size: number;
    }
}
