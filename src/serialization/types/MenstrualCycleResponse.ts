/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { MenstrualCycle } from "./MenstrualCycle";

export const MenstrualCycleResponse: core.serialization.ObjectSchema<
    serializers.MenstrualCycleResponse.Raw,
    Vital.MenstrualCycleResponse
> = core.serialization.object({
    menstrualCycle: core.serialization.property("menstrual_cycle", core.serialization.list(MenstrualCycle)),
});

export declare namespace MenstrualCycleResponse {
    interface Raw {
        menstrual_cycle: MenstrualCycle.Raw[];
    }
}
