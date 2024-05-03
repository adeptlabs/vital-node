/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { MealInDbBaseClientFacingSource } from "./MealInDbBaseClientFacingSource";

export const ClientFacingMealResponse: core.serialization.ObjectSchema<
    serializers.ClientFacingMealResponse.Raw,
    Vital.ClientFacingMealResponse
> = core.serialization.object({
    meals: core.serialization.list(MealInDbBaseClientFacingSource),
});

export declare namespace ClientFacingMealResponse {
    interface Raw {
        meals: MealInDbBaseClientFacingSource.Raw[];
    }
}
