/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vital from "../../../../api";
import * as core from "../../../../core";
import { ClientFacingGlucoseTimeseries } from "../../../types/ClientFacingGlucoseTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.glucose.Response.Raw,
    Vital.ClientFacingGlucoseTimeseries[]
> = core.serialization.list(ClientFacingGlucoseTimeseries);

export declare namespace Response {
    type Raw = ClientFacingGlucoseTimeseries.Raw[];
}
