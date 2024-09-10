/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingTimeseriesGroupClientFacingBodyTemperatureDeltaSample } from "./ClientFacingTimeseriesGroupClientFacingBodyTemperatureDeltaSample";

export const ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureDeltaSample: core.serialization.ObjectSchema<
    serializers.ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureDeltaSample.Raw,
    Vital.ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureDeltaSample
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(ClientFacingTimeseriesGroupClientFacingBodyTemperatureDeltaSample)
    ),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureDeltaSample {
    interface Raw {
        groups: Record<string, ClientFacingTimeseriesGroupClientFacingBodyTemperatureDeltaSample.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
