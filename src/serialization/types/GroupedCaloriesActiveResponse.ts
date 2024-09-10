/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedCaloriesActive } from "./GroupedCaloriesActive";

export const GroupedCaloriesActiveResponse: core.serialization.ObjectSchema<
    serializers.GroupedCaloriesActiveResponse.Raw,
    Vital.GroupedCaloriesActiveResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedCaloriesActive)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedCaloriesActiveResponse {
    interface Raw {
        groups: Record<string, GroupedCaloriesActive.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
