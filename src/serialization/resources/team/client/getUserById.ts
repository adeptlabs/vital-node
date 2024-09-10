/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingUser } from "../../../types/ClientFacingUser";

export const Response: core.serialization.Schema<serializers.team.getUserById.Response.Raw, Vital.ClientFacingUser[]> =
    core.serialization.list(ClientFacingUser);

export declare namespace Response {
    type Raw = ClientFacingUser.Raw[];
}
