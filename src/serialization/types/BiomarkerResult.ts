/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const BiomarkerResult: core.serialization.ObjectSchema<serializers.BiomarkerResult.Raw, Vital.BiomarkerResult> =
    core.serialization.object({
        name: core.serialization.string(),
        slug: core.serialization.string().optional(),
        value: core.serialization.number(),
        result: core.serialization.string(),
        type: core.serialization.lazy(async () => (await import("..")).ResultType),
        unit: core.serialization.string().optional(),
        timestamp: core.serialization.date().optional(),
        notes: core.serialization.string().optional(),
        minRangeValue: core.serialization.property("min_range_value", core.serialization.number().optional()),
        maxRangeValue: core.serialization.property("max_range_value", core.serialization.number().optional()),
        isAboveMaxRange: core.serialization.property("is_above_max_range", core.serialization.boolean().optional()),
        isBelowMinRange: core.serialization.property("is_below_min_range", core.serialization.boolean().optional()),
        interpretation: core.serialization.string().optional(),
    });

export declare namespace BiomarkerResult {
    interface Raw {
        name: string;
        slug?: string | null;
        value: number;
        result: string;
        type: serializers.ResultType.Raw;
        unit?: string | null;
        timestamp?: string | null;
        notes?: string | null;
        min_range_value?: number | null;
        max_range_value?: number | null;
        is_above_max_range?: boolean | null;
        is_below_min_range?: boolean | null;
        interpretation?: string | null;
    }
}
