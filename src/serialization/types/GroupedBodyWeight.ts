/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingBodyWeightTimeseries } from "./ClientFacingBodyWeightTimeseries";

export const GroupedBodyWeight: core.serialization.ObjectSchema<
    serializers.GroupedBodyWeight.Raw,
    Vital.GroupedBodyWeight
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingBodyWeightTimeseries),
});

export declare namespace GroupedBodyWeight {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingBodyWeightTimeseries.Raw[];
    }
}
