/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingOrder: core.serialization.ObjectSchema<
    serializers.ClientFacingOrder.Raw,
    Vital.ClientFacingOrder
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    id: core.serialization.string(),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    patientDetails: core.serialization.property(
        "patient_details",
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingPatientDetailsCompatible).optional()
    ),
    patientAddress: core.serialization.property(
        "patient_address",
        core.serialization.lazyObject(async () => (await import("..")).PatientAddressCompatible).optional()
    ),
    labTest: core.serialization.property(
        "lab_test",
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingLabTest)
    ),
    details: core.serialization.lazy(async () => (await import("..")).ClientFacingOrderDetails),
    sampleId: core.serialization.property("sample_id", core.serialization.string().optional()),
    notes: core.serialization.string().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date()),
    events: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingOrderEvent)
    ),
    status: core.serialization.lazy(async () => (await import("..")).OrderTopLevelStatus).optional(),
    physician: core.serialization.lazyObject(async () => (await import("..")).ClientFacingPhysician).optional(),
    healthInsuranceId: core.serialization.property("health_insurance_id", core.serialization.string().optional()),
    requisitionFormUrl: core.serialization.property("requisition_form_url", core.serialization.string().optional()),
    priority: core.serialization.boolean().optional(),
    shippingDetails: core.serialization.property(
        "shipping_details",
        core.serialization.lazyObject(async () => (await import("..")).ShippingAddress).optional()
    ),
    activateBy: core.serialization.property("activate_by", core.serialization.string().optional()),
});

export declare namespace ClientFacingOrder {
    interface Raw {
        user_id: string;
        id: string;
        team_id: string;
        patient_details?: serializers.ClientFacingPatientDetailsCompatible.Raw | null;
        patient_address?: serializers.PatientAddressCompatible.Raw | null;
        lab_test: serializers.ClientFacingLabTest.Raw;
        details: serializers.ClientFacingOrderDetails.Raw;
        sample_id?: string | null;
        notes?: string | null;
        created_at: string;
        updated_at: string;
        events: serializers.ClientFacingOrderEvent.Raw[];
        status?: serializers.OrderTopLevelStatus.Raw | null;
        physician?: serializers.ClientFacingPhysician.Raw | null;
        health_insurance_id?: string | null;
        requisition_form_url?: string | null;
        priority?: boolean | null;
        shipping_details?: serializers.ShippingAddress.Raw | null;
        activate_by?: string | null;
    }
}
