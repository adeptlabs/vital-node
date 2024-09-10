/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingGlucoseTimeseries: core.serialization.ObjectSchema<
    serializers.ClientFacingGlucoseTimeseries.Raw,
    Vital.ClientFacingGlucoseTimeseries
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unit: core.serialization.string(),
    timestamp: core.serialization.string(),
    value: core.serialization.number(),
});

export declare namespace ClientFacingGlucoseTimeseries {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: string;
        timestamp: string;
        value: number;
    }
}
