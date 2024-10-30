/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const OAuthProviders: core.serialization.Schema<serializers.OAuthProviders.Raw, Vital.OAuthProviders> =
    core.serialization.enum_([
        "oura",
        "fitbit",
        "garmin",
        "strava",
        "wahoo",
        "ihealth",
        "withings",
        "google_fit",
        "dexcom_v3",
        "polar",
        "cronometer",
        "omron",
        "whoop_v2",
        "my_fitness_pal_v2",
        "ultrahuman",
    ]);

export declare namespace OAuthProviders {
    type Raw =
        | "oura"
        | "fitbit"
        | "garmin"
        | "strava"
        | "wahoo"
        | "ihealth"
        | "withings"
        | "google_fit"
        | "dexcom_v3"
        | "polar"
        | "cronometer"
        | "omron"
        | "whoop_v2"
        | "my_fitness_pal_v2"
        | "ultrahuman";
}
