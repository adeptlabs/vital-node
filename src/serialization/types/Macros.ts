/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const Macros: core.serialization.ObjectSchema<serializers.Macros.Raw, Vital.Macros> = core.serialization.object({
    carbs: core.serialization.number().optional(),
    protein: core.serialization.number().optional(),
    fats: core.serialization.lazyObject(async () => (await import("..")).Fats).optional(),
    alcohol: core.serialization.number().optional(),
    water: core.serialization.number().optional(),
    fibre: core.serialization.number().optional(),
    sugar: core.serialization.number().optional(),
});

export declare namespace Macros {
    interface Raw {
        carbs?: number | null;
        protein?: number | null;
        fats?: serializers.Fats.Raw | null;
        alcohol?: number | null;
        water?: number | null;
        fibre?: number | null;
        sugar?: number | null;
    }
}
