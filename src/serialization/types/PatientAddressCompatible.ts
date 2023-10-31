/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const PatientAddressCompatible: core.serialization.ObjectSchema<
    serializers.PatientAddressCompatible.Raw,
    Vital.PatientAddressCompatible
> = core.serialization.object({
    receiverName: core.serialization.property("receiver_name", core.serialization.string().optional()),
    street: core.serialization.string(),
    streetNumber: core.serialization.property("street_number", core.serialization.string().optional()),
    city: core.serialization.string(),
    state: core.serialization.string(),
    zip: core.serialization.string(),
    country: core.serialization.string(),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
});

export declare namespace PatientAddressCompatible {
    interface Raw {
        receiver_name?: string | null;
        street: string;
        street_number?: string | null;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone_number?: string | null;
    }
}
