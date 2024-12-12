/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingElectrocardiogram } from "./ClientFacingElectrocardiogram";

export const ClientFacingElectrocardiogramResponse: core.serialization.ObjectSchema<
    serializers.ClientFacingElectrocardiogramResponse.Raw,
    Vital.ClientFacingElectrocardiogramResponse
> = core.serialization.object({
    electrocardiogram: core.serialization.list(ClientFacingElectrocardiogram),
});

export declare namespace ClientFacingElectrocardiogramResponse {
    interface Raw {
        electrocardiogram: ClientFacingElectrocardiogram.Raw[];
    }
}
