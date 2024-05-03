/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { MarkerType } from "./MarkerType";
import { ClientFacingResult } from "./ClientFacingResult";

export const ClientFacingMarkerComplete: core.serialization.ObjectSchema<
    serializers.ClientFacingMarkerComplete.Raw,
    Vital.ClientFacingMarkerComplete
> = core.serialization.object({
    id: core.serialization.number(),
    name: core.serialization.string(),
    slug: core.serialization.string(),
    description: core.serialization.string().optional(),
    labId: core.serialization.property("lab_id", core.serialization.number().optional()),
    providerId: core.serialization.property("provider_id", core.serialization.string().optional()),
    type: MarkerType.optional(),
    unit: core.serialization.string().optional(),
    price: core.serialization.string().optional(),
    expectedResults: core.serialization.property("expected_results", core.serialization.list(ClientFacingResult)),
});

export declare namespace ClientFacingMarkerComplete {
    interface Raw {
        id: number;
        name: string;
        slug: string;
        description?: string | null;
        lab_id?: number | null;
        provider_id?: string | null;
        type?: MarkerType.Raw | null;
        unit?: string | null;
        price?: string | null;
        expected_results: ClientFacingResult.Raw[];
    }
}
