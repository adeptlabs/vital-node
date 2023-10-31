/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingPatientDetailsCompatible: core.serialization.ObjectSchema<
    serializers.ClientFacingPatientDetailsCompatible.Raw,
    Vital.ClientFacingPatientDetailsCompatible
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    dob: core.serialization.date(),
    gender: core.serialization.string(),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
    email: core.serialization.string().optional(),
});

export declare namespace ClientFacingPatientDetailsCompatible {
    interface Raw {
        first_name?: string | null;
        last_name?: string | null;
        dob: string;
        gender: string;
        phone_number?: string | null;
        email?: string | null;
    }
}
