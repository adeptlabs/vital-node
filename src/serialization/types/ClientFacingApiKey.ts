/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingApiKey: core.serialization.ObjectSchema<
    serializers.ClientFacingApiKey.Raw,
    Vital.ClientFacingApiKey
> = core.serialization.object({
    label: core.serialization.string(),
    value: core.serialization.string(),
    teamId: core.serialization.property("team_id", core.serialization.string().optional()),
    id: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    deletedAt: core.serialization.property("deleted_at", core.serialization.date().optional()),
});

export declare namespace ClientFacingApiKey {
    interface Raw {
        label: string;
        value: string;
        team_id?: string | null;
        id: string;
        created_at: string;
        deleted_at?: string | null;
    }
}
