/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingGlucoseTimeseries } from "./ClientFacingGlucoseTimeseries";

export const GroupedGlucose: core.serialization.ObjectSchema<serializers.GroupedGlucose.Raw, Vital.GroupedGlucose> =
    core.serialization.object({
        source: ClientFacingSource,
        data: core.serialization.list(ClientFacingGlucoseTimeseries),
    });

export declare namespace GroupedGlucose {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingGlucoseTimeseries.Raw[];
    }
}
