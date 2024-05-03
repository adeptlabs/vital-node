/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { UsAddress } from "./UsAddress";
import { LngLat } from "./LngLat";
import { AppointmentType } from "./AppointmentType";
import { AppointmentProvider } from "./AppointmentProvider";
import { AppointmentStatus } from "./AppointmentStatus";
import { AppointmentEventStatus } from "./AppointmentEventStatus";
import { ClientFacingAppointmentEvent } from "./ClientFacingAppointmentEvent";

export const ClientFacingAppointment: core.serialization.ObjectSchema<
    serializers.ClientFacingAppointment.Raw,
    Vital.ClientFacingAppointment
> = core.serialization.object({
    id: core.serialization.string(),
    userId: core.serialization.property("user_id", core.serialization.string()),
    orderId: core.serialization.property("order_id", core.serialization.string()),
    address: UsAddress,
    location: LngLat,
    startAt: core.serialization.property("start_at", core.serialization.date().optional()),
    endAt: core.serialization.property("end_at", core.serialization.date().optional()),
    ianaTimezone: core.serialization.property("iana_timezone", core.serialization.string().optional()),
    type: AppointmentType,
    provider: AppointmentProvider,
    status: AppointmentStatus,
    providerId: core.serialization.property("provider_id", core.serialization.string()),
    canReschedule: core.serialization.property("can_reschedule", core.serialization.boolean()),
    eventStatus: core.serialization.property("event_status", AppointmentEventStatus),
    eventData: core.serialization.property(
        "event_data",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    events: core.serialization.list(ClientFacingAppointmentEvent),
});

export declare namespace ClientFacingAppointment {
    interface Raw {
        id: string;
        user_id: string;
        order_id: string;
        address: UsAddress.Raw;
        location: LngLat.Raw;
        start_at?: string | null;
        end_at?: string | null;
        iana_timezone?: string | null;
        type: AppointmentType.Raw;
        provider: AppointmentProvider.Raw;
        status: AppointmentStatus.Raw;
        provider_id: string;
        can_reschedule: boolean;
        event_status: AppointmentEventStatus.Raw;
        event_data?: Record<string, unknown> | null;
        events: ClientFacingAppointmentEvent.Raw[];
    }
}
