/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ConnectionStatusState: core.serialization.Schema<
    serializers.ConnectionStatusState.Raw,
    Vital.ConnectionStatusState
> = core.serialization.enum_(["success", "error", "pending_provider_mfa"]);

export declare namespace ConnectionStatusState {
    type Raw = "success" | "error" | "pending_provider_mfa";
}
