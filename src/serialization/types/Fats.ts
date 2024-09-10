/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const Fats: core.serialization.ObjectSchema<serializers.Fats.Raw, Vital.Fats> = core.serialization.object({
    saturated: core.serialization.number().optional(),
    monounsaturated: core.serialization.number().optional(),
    polyunsaturated: core.serialization.number().optional(),
    omega3: core.serialization.number().optional(),
    omega6: core.serialization.number().optional(),
    total: core.serialization.number().optional(),
});

export declare namespace Fats {
    interface Raw {
        saturated?: number | null;
        monounsaturated?: number | null;
        polyunsaturated?: number | null;
        omega3?: number | null;
        omega6?: number | null;
        total?: number | null;
    }
}
