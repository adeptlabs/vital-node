/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedCholesterolResponse: core.serialization.ObjectSchema<
    serializers.GroupedCholesterolResponse.Raw,
    Vital.GroupedCholesterolResponse
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).GroupedCholesterol))
    ),
    next: core.serialization.string().optional(),
});

export declare namespace GroupedCholesterolResponse {
    interface Raw {
        groups: Record<string, serializers.GroupedCholesterol.Raw[]>;
        next?: string | null;
    }
}
