/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingMealChangedEventType: core.serialization.Schema<
    serializers.ClientFacingMealChangedEventType.Raw,
    Vital.ClientFacingMealChangedEventType
> = core.serialization.enum_(["daily.data.meal.created", "daily.data.meal.updated"]);

export declare namespace ClientFacingMealChangedEventType {
    type Raw = "daily.data.meal.created" | "daily.data.meal.updated";
}
