/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const WorkoutColumnExprWorkout: core.serialization.Schema<
    serializers.WorkoutColumnExprWorkout.Raw,
    Vital.WorkoutColumnExprWorkout
> = core.serialization.enum_([
    "session_start",
    "session_end",
    "title",
    "sport_name",
    "sport_slug",
    "duration_active_second",
    "heart_rate_mean",
    "heart_rate_minimum",
    "heart_rate_maximum",
    "heart_rate_zone_1",
    "heart_rate_zone_2",
    "heart_rate_zone_3",
    "heart_rate_zone_4",
    "heart_rate_zone_5",
    "heart_rate_zone_6",
    "distance_meter",
    "calories",
    "elevation_gain_meter",
    "elevation_maximum_meter",
    "elevation_minimum_meter",
    "speed_mean",
    "speed_maximum",
    "power_source",
    "power_mean",
    "power_maximum",
    "power_weighted_mean",
    "steps",
    "map",
    "source_type",
    "source_provider",
    "source_app_id",
]);

export declare namespace WorkoutColumnExprWorkout {
    type Raw =
        | "session_start"
        | "session_end"
        | "title"
        | "sport_name"
        | "sport_slug"
        | "duration_active_second"
        | "heart_rate_mean"
        | "heart_rate_minimum"
        | "heart_rate_maximum"
        | "heart_rate_zone_1"
        | "heart_rate_zone_2"
        | "heart_rate_zone_3"
        | "heart_rate_zone_4"
        | "heart_rate_zone_5"
        | "heart_rate_zone_6"
        | "distance_meter"
        | "calories"
        | "elevation_gain_meter"
        | "elevation_maximum_meter"
        | "elevation_minimum_meter"
        | "speed_mean"
        | "speed_maximum"
        | "power_source"
        | "power_mean"
        | "power_maximum"
        | "power_weighted_mean"
        | "steps"
        | "map"
        | "source_type"
        | "source_provider"
        | "source_app_id";
}
