/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vital from "../../../../../api";
import * as core from "../../../../../core";
import { PhysicianCreateRequest } from "../../../../types/PhysicianCreateRequest";
import { HealthInsuranceCreateRequest } from "../../../../types/HealthInsuranceCreateRequest";
import { Consent } from "../../../../types/Consent";
import { AoEAnswer } from "../../../../types/AoEAnswer";
import { PatientDetails } from "../../../../types/PatientDetails";
import { PatientAddressCompatible } from "../../../../types/PatientAddressCompatible";

export const CreateOrderRequestCompatible: core.serialization.Schema<
    serializers.CreateOrderRequestCompatible.Raw,
    Vital.CreateOrderRequestCompatible
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    labTestId: core.serialization.property("lab_test_id", core.serialization.string()),
    physician: PhysicianCreateRequest.optional(),
    healthInsurance: core.serialization.property("health_insurance", HealthInsuranceCreateRequest.optional()),
    priority: core.serialization.boolean().optional(),
    consents: core.serialization.list(Consent).optional(),
    activateBy: core.serialization.property("activate_by", core.serialization.string().optional()),
    aoeAnswers: core.serialization.property("aoe_answers", core.serialization.list(AoEAnswer).optional()),
    passthrough: core.serialization.string().optional(),
    patientDetails: core.serialization.property("patient_details", PatientDetails),
    patientAddress: core.serialization.property("patient_address", PatientAddressCompatible),
});

export declare namespace CreateOrderRequestCompatible {
    interface Raw {
        user_id: string;
        lab_test_id: string;
        physician?: PhysicianCreateRequest.Raw | null;
        health_insurance?: HealthInsuranceCreateRequest.Raw | null;
        priority?: boolean | null;
        consents?: Consent.Raw[] | null;
        activate_by?: string | null;
        aoe_answers?: AoEAnswer.Raw[] | null;
        passthrough?: string | null;
        patient_details: PatientDetails.Raw;
        patient_address: PatientAddressCompatible.Raw;
    }
}
