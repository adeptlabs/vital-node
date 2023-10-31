/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const LabResultsRaw: core.serialization.ObjectSchema<serializers.LabResultsRaw.Raw, Vital.LabResultsRaw> =
    core.serialization.object({
        metadata: core.serialization.lazyObject(async () => (await import("..")).LabResultsMetadata),
        results: core.serialization.lazy(async () => (await import("..")).LabResultsRawResults),
    });

export declare namespace LabResultsRaw {
    interface Raw {
        metadata: serializers.LabResultsMetadata.Raw;
        results: serializers.LabResultsRawResults.Raw;
    }
}
