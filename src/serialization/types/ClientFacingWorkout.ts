/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { ClientFacingSport } from "./ClientFacingSport";
import { ClientFacingSource } from "./ClientFacingSource";

export const ClientFacingWorkout: core.serialization.ObjectSchema<
    serializers.ClientFacingWorkout.Raw,
    Vital.ClientFacingWorkout
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    id: core.serialization.string(),
    title: core.serialization.string().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    averageHr: core.serialization.property("average_hr", core.serialization.number().optional()),
    maxHr: core.serialization.property("max_hr", core.serialization.number().optional()),
    distance: core.serialization.number().optional(),
    calendarDate: core.serialization.property("calendar_date", core.serialization.string()),
    timeStart: core.serialization.property("time_start", core.serialization.date()),
    timeEnd: core.serialization.property("time_end", core.serialization.date()),
    calories: core.serialization.number().optional(),
    sport: ClientFacingSport.optional(),
    hrZones: core.serialization.property("hr_zones", core.serialization.list(core.serialization.number()).optional()),
    movingTime: core.serialization.property("moving_time", core.serialization.number().optional()),
    totalElevationGain: core.serialization.property("total_elevation_gain", core.serialization.number().optional()),
    elevHigh: core.serialization.property("elev_high", core.serialization.number().optional()),
    elevLow: core.serialization.property("elev_low", core.serialization.number().optional()),
    averageSpeed: core.serialization.property("average_speed", core.serialization.number().optional()),
    maxSpeed: core.serialization.property("max_speed", core.serialization.number().optional()),
    averageWatts: core.serialization.property("average_watts", core.serialization.number().optional()),
    deviceWatts: core.serialization.property("device_watts", core.serialization.number().optional()),
    maxWatts: core.serialization.property("max_watts", core.serialization.number().optional()),
    weightedAverageWatts: core.serialization.property("weighted_average_watts", core.serialization.number().optional()),
    map: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    providerId: core.serialization.property("provider_id", core.serialization.string()),
    source: ClientFacingSource,
});

export declare namespace ClientFacingWorkout {
    interface Raw {
        user_id: string;
        id: string;
        title?: string | null;
        timezone_offset?: number | null;
        average_hr?: number | null;
        max_hr?: number | null;
        distance?: number | null;
        calendar_date: string;
        time_start: string;
        time_end: string;
        calories?: number | null;
        sport?: ClientFacingSport.Raw | null;
        hr_zones?: number[] | null;
        moving_time?: number | null;
        total_elevation_gain?: number | null;
        elev_high?: number | null;
        elev_low?: number | null;
        average_speed?: number | null;
        max_speed?: number | null;
        average_watts?: number | null;
        device_watts?: number | null;
        max_watts?: number | null;
        weighted_average_watts?: number | null;
        map?: Record<string, unknown> | null;
        provider_id: string;
        source: ClientFacingSource.Raw;
    }
}
