/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedIggResponse: core.serialization.ObjectSchema<
    serializers.GroupedIggResponse.Raw,
    Vital.GroupedIggResponse
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).GroupedIgg))
    ),
    next: core.serialization.string().optional(),
});

export declare namespace GroupedIggResponse {
    interface Raw {
        groups: Record<string, serializers.GroupedIgg.Raw[]>;
        next?: string | null;
    }
}
