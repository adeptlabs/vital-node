/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         payorCode: "payor_code",
 *         memberId: "member_id",
 *         relationship: Vital.ResponsibleRelationship.Self,
 *         insured: {
 *             firstName: "first_name",
 *             lastName: "last_name",
 *             gender: Vital.Gender.Female,
 *             address: {
 *                 firstLine: "first_line",
 *                 country: "country",
 *                 zip: "zip",
 *                 city: "city",
 *                 state: "state"
 *             },
 *             dob: "dob",
 *             email: "email",
 *             phoneNumber: "phone_number"
 *         }
 *     }
 */
export interface CreateInsuranceRequest {
    payorCode: string;
    memberId: string;
    groupId?: string;
    relationship: Vital.ResponsibleRelationship;
    insured: Vital.VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails;
    guarantor?: Vital.VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails;
}
