/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingOrder {
    /** User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api. */
    userId: string;
    /** The Vital Order ID */
    id: string;
    /** Your team id. */
    teamId: string;
    /** Patient Details */
    patientDetails?: Vital.ClientFacingPatientDetailsCompatible;
    /** Patient Address */
    patientAddress?: Vital.PatientAddressCompatible;
    /** The Vital Test associated with the order */
    labTest: Vital.ClientFacingLabTest;
    details: Vital.ClientFacingOrderDetails;
    /** Sample ID */
    sampleId?: string;
    /** Notes associated with the order */
    notes?: string;
    /** When your order was created */
    createdAt: string;
    /** When your order was last updated. */
    updatedAt: string;
    events: Vital.ClientFacingOrderEvent[];
    status?: Vital.OrderTopLevelStatus;
    physician?: Vital.ClientFacingPhysician;
    /** Vital ID of the health insurance. */
    healthInsuranceId?: string;
    /** DEPRECATED. Requistion form url. */
    requisitionFormUrl?: string;
    /** Defines whether order is priority or not. For some labs, this refers to a STAT order. */
    priority?: boolean;
    /** Shipping Details. For unregistered testkit orders. */
    shippingDetails?: Vital.ShippingAddress;
    /** Schedule an Order to be processed in a future date. */
    activateBy?: string;
    passthrough?: string;
    billingType?: Vital.Billing;
    icdCodes?: string[];
}
