/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingWorkoutDurationSampleIntensity: core.serialization.Schema<
    serializers.ClientFacingWorkoutDurationSampleIntensity.Raw,
    Vital.ClientFacingWorkoutDurationSampleIntensity
> = core.serialization.enum_(["low", "medium", "high"]);

export declare namespace ClientFacingWorkoutDurationSampleIntensity {
    type Raw = "low" | "medium" | "high";
}
