/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingProviderWithStatus } from "../../../types/ClientFacingProviderWithStatus";

export const Response: core.serialization.Schema<
    serializers.user.getConnectedProviders.Response.Raw,
    Record<string, Vital.ClientFacingProviderWithStatus[]>
> = core.serialization.record(core.serialization.string(), core.serialization.list(ClientFacingProviderWithStatus));

export declare namespace Response {
    type Raw = Record<string, ClientFacingProviderWithStatus.Raw[]>;
}
