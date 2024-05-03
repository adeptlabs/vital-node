/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vital from "../../../../api";
import * as core from "../../../../core";
import { ClientFacingCholesterolTimeseries } from "../../../types/ClientFacingCholesterolTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.cholesterolTriglycerides.Response.Raw,
    Vital.ClientFacingCholesterolTimeseries[]
> = core.serialization.list(ClientFacingCholesterolTimeseries);

export declare namespace Response {
    type Raw = ClientFacingCholesterolTimeseries.Raw[];
}
