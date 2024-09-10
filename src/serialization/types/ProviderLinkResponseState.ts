/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ProviderLinkResponseState: core.serialization.Schema<
    serializers.ProviderLinkResponseState.Raw,
    Vital.ProviderLinkResponseState
> = core.serialization.enum_(["success", "error", "pending_provider_mfa"]);

export declare namespace ProviderLinkResponseState {
    type Raw = "success" | "error" | "pending_provider_mfa";
}
