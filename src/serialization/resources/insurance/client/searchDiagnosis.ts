/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vital from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.insurance.searchDiagnosis.Response.Raw,
    Vital.ClientFacingDiagnosisInformation[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).ClientFacingDiagnosisInformation)
);

export declare namespace Response {
    type Raw = serializers.ClientFacingDiagnosisInformation.Raw[];
}
