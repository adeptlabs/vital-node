/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedStressLevelResponse: core.serialization.ObjectSchema<
    serializers.GroupedStressLevelResponse.Raw,
    Vital.GroupedStressLevelResponse
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).GroupedStressLevel))
    ),
    next: core.serialization.string().optional(),
});

export declare namespace GroupedStressLevelResponse {
    interface Raw {
        groups: Record<string, serializers.GroupedStressLevel.Raw[]>;
        next?: string | null;
    }
}
