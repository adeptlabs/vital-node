/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const LabLocationMetadata: core.serialization.ObjectSchema<
    serializers.LabLocationMetadata.Raw,
    Vital.LabLocationMetadata
> = core.serialization.object({
    name: core.serialization.string(),
    state: core.serialization.string(),
    city: core.serialization.string(),
    zipCode: core.serialization.property("zip_code", core.serialization.string()),
    firstLine: core.serialization.property("first_line", core.serialization.string()),
    secondLine: core.serialization.property("second_line", core.serialization.string().optional()),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
    faxNumber: core.serialization.property("fax_number", core.serialization.string().optional()),
    hours: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace LabLocationMetadata {
    interface Raw {
        name: string;
        state: string;
        city: string;
        zip_code: string;
        first_line: string;
        second_line?: string | null;
        phone_number?: string | null;
        fax_number?: string | null;
        hours?: Record<string, unknown> | null;
    }
}
