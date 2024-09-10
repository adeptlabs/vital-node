/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedBloodOxygen } from "./GroupedBloodOxygen";

export const GroupedBloodOxygenResponse: core.serialization.ObjectSchema<
    serializers.GroupedBloodOxygenResponse.Raw,
    Vital.GroupedBloodOxygenResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedBloodOxygen)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedBloodOxygenResponse {
    interface Raw {
        groups: Record<string, GroupedBloodOxygen.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
