/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingCarbohydratesChangedEventType: core.serialization.Schema<
    serializers.ClientFacingCarbohydratesChangedEventType.Raw,
    Vital.ClientFacingCarbohydratesChangedEventType
> = core.serialization.enum_(["daily.data.carbohydrates.created", "daily.data.carbohydrates.updated"]);

export declare namespace ClientFacingCarbohydratesChangedEventType {
    type Raw = "daily.data.carbohydrates.created" | "daily.data.carbohydrates.updated";
}
