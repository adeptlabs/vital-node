/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingLabLocation {
    metadata: Vital.LabLocationMetadata;
    distance: number;
    siteCode: string;
    supportedBillTypes: Vital.Billing[];
}
