/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const DemoProviders: core.serialization.Schema<serializers.DemoProviders.Raw, Vital.DemoProviders> =
    core.serialization.enum_(["apple_health_kit", "fitbit", "freestyle_libre", "oura"]);

export declare namespace DemoProviders {
    type Raw = "apple_health_kit" | "fitbit" | "freestyle_libre" | "oura";
}
