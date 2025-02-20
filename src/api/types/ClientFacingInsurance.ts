/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingInsurance {
    memberId: string;
    payorCode: string;
    relationship: Vital.ResponsibleRelationship;
    insured: Vital.VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails;
    company: Vital.CompanyDetails;
    groupId?: string;
    guarantor?: Vital.GuarantorDetails;
}
