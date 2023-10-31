/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const AuthType: core.serialization.Schema<serializers.AuthType.Raw, Vital.AuthType> = core.serialization.enum_([
    "password",
    "oauth",
    "email",
]);

export declare namespace AuthType {
    type Raw = "password" | "oauth" | "email";
}
