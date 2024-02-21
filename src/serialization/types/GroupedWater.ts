/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedWater: core.serialization.ObjectSchema<serializers.GroupedWater.Raw, Vital.GroupedWater> =
    core.serialization.object({
        source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
        data: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).ClientFacingWaterTimeseries)
        ),
    });

export declare namespace GroupedWater {
    interface Raw {
        source: serializers.ClientFacingSource.Raw;
        data: serializers.ClientFacingWaterTimeseries.Raw[];
    }
}
