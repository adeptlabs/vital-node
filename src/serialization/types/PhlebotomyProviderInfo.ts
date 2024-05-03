/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { AppointmentProvider } from "./AppointmentProvider";
import { AppointmentServiceType } from "./AppointmentServiceType";

export const PhlebotomyProviderInfo: core.serialization.ObjectSchema<
    serializers.PhlebotomyProviderInfo.Raw,
    Vital.PhlebotomyProviderInfo
> = core.serialization.object({
    name: AppointmentProvider,
    serviceTypes: core.serialization.property("service_types", core.serialization.list(AppointmentServiceType)),
});

export declare namespace PhlebotomyProviderInfo {
    interface Raw {
        name: AppointmentProvider.Raw;
        service_types: AppointmentServiceType.Raw[];
    }
}
