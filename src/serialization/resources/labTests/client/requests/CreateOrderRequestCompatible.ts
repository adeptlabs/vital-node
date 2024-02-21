/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vital from "../../../../../api";
import * as core from "../../../../../core";

export const CreateOrderRequestCompatible: core.serialization.Schema<
    serializers.CreateOrderRequestCompatible.Raw,
    Vital.CreateOrderRequestCompatible
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    labTestId: core.serialization.property("lab_test_id", core.serialization.string()),
    physician: core.serialization
        .lazyObject(async () => (await import("../../../..")).PhysicianCreateRequest)
        .optional(),
    healthInsurance: core.serialization.property(
        "health_insurance",
        core.serialization.lazyObject(async () => (await import("../../../..")).HealthInsuranceCreateRequest).optional()
    ),
    priority: core.serialization.boolean().optional(),
    consents: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../..")).Consent))
        .optional(),
    activateBy: core.serialization.property("activate_by", core.serialization.string().optional()),
    patientDetails: core.serialization.property(
        "patient_details",
        core.serialization.lazyObject(async () => (await import("../../../..")).PatientDetails)
    ),
    patientAddress: core.serialization.property(
        "patient_address",
        core.serialization.lazyObject(async () => (await import("../../../..")).PatientAddressCompatible)
    ),
});

export declare namespace CreateOrderRequestCompatible {
    interface Raw {
        user_id: string;
        lab_test_id: string;
        physician?: serializers.PhysicianCreateRequest.Raw | null;
        health_insurance?: serializers.HealthInsuranceCreateRequest.Raw | null;
        priority?: boolean | null;
        consents?: serializers.Consent.Raw[] | null;
        activate_by?: string | null;
        patient_details: serializers.PatientDetails.Raw;
        patient_address: serializers.PatientAddressCompatible.Raw;
    }
}
