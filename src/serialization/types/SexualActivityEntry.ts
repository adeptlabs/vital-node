/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const SexualActivityEntry: core.serialization.ObjectSchema<
    serializers.SexualActivityEntry.Raw,
    Vital.SexualActivityEntry
> = core.serialization.object({
    date: core.serialization.string(),
    protectionUsed: core.serialization.property("protection_used", core.serialization.boolean().optional()),
});

export declare namespace SexualActivityEntry {
    interface Raw {
        date: string;
        protection_used?: boolean | null;
    }
}
