/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingHypnogramTimeseries: core.serialization.ObjectSchema<
    serializers.ClientFacingHypnogramTimeseries.Raw,
    Vital.ClientFacingHypnogramTimeseries
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unit: core.serialization.string(),
    timestamp: core.serialization.date(),
    start: core.serialization.date(),
    end: core.serialization.date(),
    value: core.serialization.number(),
});

export declare namespace ClientFacingHypnogramTimeseries {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: string;
        timestamp: string;
        start: string;
        end: string;
        value: number;
    }
}
