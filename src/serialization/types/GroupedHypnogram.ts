/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingHypnogramTimeseries } from "./ClientFacingHypnogramTimeseries";

export const GroupedHypnogram: core.serialization.ObjectSchema<
    serializers.GroupedHypnogram.Raw,
    Vital.GroupedHypnogram
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingHypnogramTimeseries),
});

export declare namespace GroupedHypnogram {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingHypnogramTimeseries.Raw[];
    }
}
