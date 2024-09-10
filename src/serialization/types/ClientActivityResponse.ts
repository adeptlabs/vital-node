/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingActivity } from "./ClientFacingActivity";

export const ClientActivityResponse: core.serialization.ObjectSchema<
    serializers.ClientActivityResponse.Raw,
    Vital.ClientActivityResponse
> = core.serialization.object({
    activity: core.serialization.list(ClientFacingActivity),
});

export declare namespace ClientActivityResponse {
    interface Raw {
        activity: ClientFacingActivity.Raw[];
    }
}
