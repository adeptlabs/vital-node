/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ClientFacingInsurance {
    memberId: string;
    payorCode: string;
    relationship: Vital.ResponsibleRelationship;
    insured: Vital.PersonDetailsOutput;
    company: Vital.CompanyDetails;
    groupId?: string;
    guarantor?: Vital.PersonDetailsOutput;
}
