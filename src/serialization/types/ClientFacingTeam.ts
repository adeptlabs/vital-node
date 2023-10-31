/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingTeam: core.serialization.ObjectSchema<
    serializers.ClientFacingTeam.Raw,
    Vital.ClientFacingTeam
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    svixAppId: core.serialization.property("svix_app_id", core.serialization.string().optional()),
    clientId: core.serialization.property("client_id", core.serialization.string().optional()),
    clientSecret: core.serialization.property("client_secret", core.serialization.string().optional()),
    airtableApiKey: core.serialization.property("airtable_api_key", core.serialization.string().optional()),
    airtableBaseId: core.serialization.property("airtable_base_id", core.serialization.string().optional()),
    webhookSecret: core.serialization.property("webhook_secret", core.serialization.string().optional()),
    apiKey: core.serialization.property("api_key", core.serialization.string().optional()),
    apiKeys: core.serialization.property(
        "api_keys",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).ClientFacingApiKey))
            .optional()
    ),
    configuration: core.serialization.lazyObject(async () => (await import("..")).TeamConfig).optional(),
    testkitsTextsEnabled: core.serialization.property("testkits_texts_enabled", core.serialization.boolean()),
    labTestsPatientCommunicationEnabled: core.serialization.property(
        "lab_tests_patient_communication_enabled",
        core.serialization.boolean()
    ),
    labTestsPatientSmsCommunicationEnabled: core.serialization.property(
        "lab_tests_patient_sms_communication_enabled",
        core.serialization.boolean()
    ),
    labTestsPatientEmailCommunicationEnabled: core.serialization.property(
        "lab_tests_patient_email_communication_enabled",
        core.serialization.boolean()
    ),
    logoUrl: core.serialization.property("logo_url", core.serialization.string().optional()),
});

export declare namespace ClientFacingTeam {
    interface Raw {
        id: string;
        name: string;
        svix_app_id?: string | null;
        client_id?: string | null;
        client_secret?: string | null;
        airtable_api_key?: string | null;
        airtable_base_id?: string | null;
        webhook_secret?: string | null;
        api_key?: string | null;
        api_keys?: serializers.ClientFacingApiKey.Raw[] | null;
        configuration?: serializers.TeamConfig.Raw | null;
        testkits_texts_enabled: boolean;
        lab_tests_patient_communication_enabled: boolean;
        lab_tests_patient_sms_communication_enabled: boolean;
        lab_tests_patient_email_communication_enabled: boolean;
        logo_url?: string | null;
    }
}
