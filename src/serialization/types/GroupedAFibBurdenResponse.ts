/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedAFibBurden } from "./GroupedAFibBurden";

export const GroupedAFibBurdenResponse: core.serialization.ObjectSchema<
    serializers.GroupedAFibBurdenResponse.Raw,
    Vital.GroupedAFibBurdenResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedAFibBurden)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedAFibBurdenResponse {
    interface Raw {
        groups: Record<string, GroupedAFibBurden.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
