/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ResultType } from "./ResultType";
import { ParentBiomarkerData } from "./ParentBiomarkerData";

export const BiomarkerResult: core.serialization.ObjectSchema<serializers.BiomarkerResult.Raw, Vital.BiomarkerResult> =
    core.serialization.object({
        name: core.serialization.string(),
        slug: core.serialization.string().optional(),
        value: core.serialization.number(),
        result: core.serialization.string(),
        type: ResultType,
        unit: core.serialization.string().optional(),
        timestamp: core.serialization.string().optional(),
        notes: core.serialization.string().optional(),
        minRangeValue: core.serialization.property("min_range_value", core.serialization.number().optional()),
        maxRangeValue: core.serialization.property("max_range_value", core.serialization.number().optional()),
        isAboveMaxRange: core.serialization.property("is_above_max_range", core.serialization.boolean().optional()),
        isBelowMinRange: core.serialization.property("is_below_min_range", core.serialization.boolean().optional()),
        interpretation: core.serialization.string().optional(),
        loinc: core.serialization.string().optional(),
        loincSlug: core.serialization.property("loinc_slug", core.serialization.string().optional()),
        providerId: core.serialization.property("provider_id", core.serialization.string().optional()),
        sourceMarkers: core.serialization.property(
            "source_markers",
            core.serialization.list(ParentBiomarkerData).optional()
        ),
    });

export declare namespace BiomarkerResult {
    interface Raw {
        name: string;
        slug?: string | null;
        value: number;
        result: string;
        type: ResultType.Raw;
        unit?: string | null;
        timestamp?: string | null;
        notes?: string | null;
        min_range_value?: number | null;
        max_range_value?: number | null;
        is_above_max_range?: boolean | null;
        is_below_min_range?: boolean | null;
        interpretation?: string | null;
        loinc?: string | null;
        loinc_slug?: string | null;
        provider_id?: string | null;
        source_markers?: ParentBiomarkerData.Raw[] | null;
    }
}
