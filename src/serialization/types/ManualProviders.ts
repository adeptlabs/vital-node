/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ManualProviders: core.serialization.Schema<serializers.ManualProviders.Raw, Vital.ManualProviders> =
    core.serialization.enum_([
        "beurer_ble",
        "omron_ble",
        "accuchek_ble",
        "contour_ble",
        "freestyle_libre_ble",
        "onetouch_ble",
        "apple_health_kit",
        "manual",
        "health_connect",
    ]);

export declare namespace ManualProviders {
    type Raw =
        | "beurer_ble"
        | "omron_ble"
        | "accuchek_ble"
        | "contour_ble"
        | "freestyle_libre_ble"
        | "onetouch_ble"
        | "apple_health_kit"
        | "manual"
        | "health_connect";
}
