/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { GroupedGlucose } from "./GroupedGlucose";

export const GroupedGlucoseResponse: core.serialization.ObjectSchema<
    serializers.GroupedGlucoseResponse.Raw,
    Vital.GroupedGlucoseResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedGlucose)),
    next: core.serialization.string().optional(),
});

export declare namespace GroupedGlucoseResponse {
    interface Raw {
        groups: Record<string, GroupedGlucose.Raw[]>;
        next?: string | null;
    }
}
