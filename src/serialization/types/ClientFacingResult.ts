/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { ClientFacingLoinc } from "./ClientFacingLoinc";

export const ClientFacingResult: core.serialization.ObjectSchema<
    serializers.ClientFacingResult.Raw,
    Vital.ClientFacingResult
> = core.serialization.object({
    id: core.serialization.number(),
    name: core.serialization.string(),
    slug: core.serialization.string(),
    labId: core.serialization.property("lab_id", core.serialization.number().optional()),
    providerId: core.serialization.property("provider_id", core.serialization.string().optional()),
    required: core.serialization.boolean(),
    loinc: ClientFacingLoinc.optional(),
});

export declare namespace ClientFacingResult {
    interface Raw {
        id: number;
        name: string;
        slug: string;
        lab_id?: number | null;
        provider_id?: string | null;
        required: boolean;
        loinc?: ClientFacingLoinc.Raw | null;
    }
}
