/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vital from "../../../../../api";
import * as core from "../../../../../core";

export const UserPatchBody: core.serialization.Schema<serializers.UserPatchBody.Raw, Vital.UserPatchBody> =
    core.serialization.object({
        fallbackTimeZone: core.serialization.property("fallback_time_zone", core.serialization.string().optional()),
    });

export declare namespace UserPatchBody {
    interface Raw {
        fallback_time_zone?: string | null;
    }
}
