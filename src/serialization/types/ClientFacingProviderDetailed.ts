/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingProviderDetailed: core.serialization.ObjectSchema<
    serializers.ClientFacingProviderDetailed.Raw,
    Vital.ClientFacingProviderDetailed
> = core.serialization.object({
    name: core.serialization.string(),
    slug: core.serialization.string(),
    description: core.serialization.string(),
    logo: core.serialization.string().optional(),
    authType: core.serialization.property(
        "auth_type",
        core.serialization.lazy(async () => (await import("..")).SourceAuthType).optional()
    ),
    supportedResources: core.serialization.property(
        "supported_resources",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("..")).ClientFacingResource))
            .optional()
    ),
});

export declare namespace ClientFacingProviderDetailed {
    interface Raw {
        name: string;
        slug: string;
        description: string;
        logo?: string | null;
        auth_type?: serializers.SourceAuthType.Raw | null;
        supported_resources?: serializers.ClientFacingResource.Raw[] | null;
    }
}
