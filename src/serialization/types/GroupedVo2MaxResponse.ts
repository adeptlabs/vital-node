/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { GroupedVo2Max } from "./GroupedVo2Max";

export const GroupedVo2MaxResponse: core.serialization.ObjectSchema<
    serializers.GroupedVo2MaxResponse.Raw,
    Vital.GroupedVo2MaxResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedVo2Max)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedVo2MaxResponse {
    interface Raw {
        groups: Record<string, GroupedVo2Max.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
