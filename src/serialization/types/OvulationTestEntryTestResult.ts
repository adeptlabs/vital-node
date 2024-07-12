/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const OvulationTestEntryTestResult: core.serialization.Schema<
    serializers.OvulationTestEntryTestResult.Raw,
    Vital.OvulationTestEntryTestResult
> = core.serialization.enum_(["negative", "positive", "luteinizing_hormone_surge", "estrogen_surge", "indeterminate"]);

export declare namespace OvulationTestEntryTestResult {
    type Raw = "negative" | "positive" | "luteinizing_hormone_surge" | "estrogen_surge" | "indeterminate";
}
