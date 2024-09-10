/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vital from "../../../../../api/index";
import * as core from "../../../../../core";

export const UserCreateBody: core.serialization.Schema<serializers.UserCreateBody.Raw, Vital.UserCreateBody> =
    core.serialization.object({
        clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
        fallbackTimeZone: core.serialization.property("fallback_time_zone", core.serialization.string().optional()),
        fallbackBirthDate: core.serialization.property("fallback_birth_date", core.serialization.string().optional()),
        ingestionStart: core.serialization.property("ingestion_start", core.serialization.string().optional()),
        ingestionEnd: core.serialization.property("ingestion_end", core.serialization.string().optional()),
    });

export declare namespace UserCreateBody {
    interface Raw {
        client_user_id: string;
        fallback_time_zone?: string | null;
        fallback_birth_date?: string | null;
        ingestion_start?: string | null;
        ingestion_end?: string | null;
    }
}
