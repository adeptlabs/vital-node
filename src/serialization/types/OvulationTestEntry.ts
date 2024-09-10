/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { OvulationTestEntryTestResult } from "./OvulationTestEntryTestResult";

export const OvulationTestEntry: core.serialization.ObjectSchema<
    serializers.OvulationTestEntry.Raw,
    Vital.OvulationTestEntry
> = core.serialization.object({
    date: core.serialization.string(),
    testResult: core.serialization.property("test_result", OvulationTestEntryTestResult),
});

export declare namespace OvulationTestEntry {
    interface Raw {
        date: string;
        test_result: OvulationTestEntryTestResult.Raw;
    }
}
