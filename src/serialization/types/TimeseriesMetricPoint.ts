/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const TimeseriesMetricPoint: core.serialization.ObjectSchema<
    serializers.TimeseriesMetricPoint.Raw,
    Vital.TimeseriesMetricPoint
> = core.serialization.object({
    date: core.serialization.date(),
    value: core.serialization.number(),
    all: core.serialization.number(),
});

export declare namespace TimeseriesMetricPoint {
    interface Raw {
        date: string;
        value: number;
        all: number;
    }
}
