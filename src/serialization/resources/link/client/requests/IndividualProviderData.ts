/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vital from "../../../../../api/index";
import * as core from "../../../../../core";
import { Region } from "../../../../types/Region";

export const IndividualProviderData: core.serialization.Schema<
    serializers.IndividualProviderData.Raw,
    Omit<Vital.IndividualProviderData, "vitalLinkToken">
> = core.serialization.object({
    username: core.serialization.string(),
    password: core.serialization.string(),
    region: Region.optional(),
});

export declare namespace IndividualProviderData {
    interface Raw {
        username: string;
        password: string;
        region?: Region.Raw | null;
    }
}
