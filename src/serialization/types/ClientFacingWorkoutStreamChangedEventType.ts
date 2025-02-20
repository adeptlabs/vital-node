/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingWorkoutStreamChangedEventType: core.serialization.Schema<
    serializers.ClientFacingWorkoutStreamChangedEventType.Raw,
    Vital.ClientFacingWorkoutStreamChangedEventType
> = core.serialization.enum_(["daily.data.workout_stream.created", "daily.data.workout_stream.updated"]);

export declare namespace ClientFacingWorkoutStreamChangedEventType {
    type Raw = "daily.data.workout_stream.created" | "daily.data.workout_stream.updated";
}
