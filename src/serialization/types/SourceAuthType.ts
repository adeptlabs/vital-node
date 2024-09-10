/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const SourceAuthType: core.serialization.Schema<serializers.SourceAuthType.Raw, Vital.SourceAuthType> =
    core.serialization.enum_(["oauth", "team_oauth", "sdk", "password", "email", "app", ""]);

export declare namespace SourceAuthType {
    type Raw = "oauth" | "team_oauth" | "sdk" | "password" | "email" | "app" | "";
}
