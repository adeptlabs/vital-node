/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedRespiratoryRate: core.serialization.ObjectSchema<
    serializers.GroupedRespiratoryRate.Raw,
    Vital.GroupedRespiratoryRate
> = core.serialization.object({
    source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingRespiratoryRateTimeseries)
    ),
});

export declare namespace GroupedRespiratoryRate {
    interface Raw {
        source: serializers.ClientFacingSource.Raw;
        data: serializers.ClientFacingRespiratoryRateTimeseries.Raw[];
    }
}
