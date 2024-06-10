/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingBodyTemperatureDeltaSampleSensorLocation: core.serialization.Schema<
    serializers.ClientFacingBodyTemperatureDeltaSampleSensorLocation.Raw,
    Vital.ClientFacingBodyTemperatureDeltaSampleSensorLocation
> = core.serialization.enum_([
    "armpit",
    "body",
    "ear",
    "finger",
    "gastrointestinal",
    "mouth",
    "rectum",
    "toe",
    "eardrum",
    "temporal_artery",
    "forehead",
    "wrist",
]);

export declare namespace ClientFacingBodyTemperatureDeltaSampleSensorLocation {
    type Raw =
        | "armpit"
        | "body"
        | "ear"
        | "finger"
        | "gastrointestinal"
        | "mouth"
        | "rectum"
        | "toe"
        | "eardrum"
        | "temporal_artery"
        | "forehead"
        | "wrist";
}
