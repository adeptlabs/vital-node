/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const PhysicianCreateRequestBase: core.serialization.ObjectSchema<
    serializers.PhysicianCreateRequestBase.Raw,
    Vital.PhysicianCreateRequestBase
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    email: core.serialization.string().optional(),
    npi: core.serialization.string(),
    licensedStates: core.serialization.property(
        "licensed_states",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace PhysicianCreateRequestBase {
    interface Raw {
        first_name: string;
        last_name: string;
        email?: string | null;
        npi: string;
        licensed_states?: string[] | null;
    }
}
