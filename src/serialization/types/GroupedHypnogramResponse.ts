/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedHypnogram } from "./GroupedHypnogram";

export const GroupedHypnogramResponse: core.serialization.ObjectSchema<
    serializers.GroupedHypnogramResponse.Raw,
    Vital.GroupedHypnogramResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedHypnogram)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedHypnogramResponse {
    interface Raw {
        groups: Record<string, GroupedHypnogram.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
