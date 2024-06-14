/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { GroupedDistance } from "./GroupedDistance";

export const GroupedDistanceResponse: core.serialization.ObjectSchema<
    serializers.GroupedDistanceResponse.Raw,
    Vital.GroupedDistanceResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedDistance)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedDistanceResponse {
    interface Raw {
        groups: Record<string, GroupedDistance.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
