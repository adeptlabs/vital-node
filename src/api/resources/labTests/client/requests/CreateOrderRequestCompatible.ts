/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../..";

export interface CreateOrderRequestCompatible {
    userId: string;
    labTestId: string;
    physician?: Vital.PhysicianCreateRequest;
    healthInsurance?: Vital.HealthInsuranceCreateRequest;
    /** Defines whether order is priority or not. For some labs, this refers to a STAT order. */
    priority?: boolean;
    billingType?: Vital.Billing;
    icdCodes?: string[];
    consents?: Vital.Consent[];
    activateBy?: string;
    aoeAnswers?: Vital.AoEAnswer[];
    passthrough?: string;
    patientDetails: Vital.PatientDetails;
    patientAddress: Vital.PatientAddressCompatible;
}
