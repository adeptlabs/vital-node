/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { SleepSelectorSleep } from "./SleepSelectorSleep";

export const SleepSelector: core.serialization.ObjectSchema<serializers.SleepSelector.Raw, Vital.SleepSelector> =
    core.serialization.object({
        sleep: SleepSelectorSleep,
    });

export declare namespace SleepSelector {
    interface Raw {
        sleep: SleepSelectorSleep.Raw;
    }
}
