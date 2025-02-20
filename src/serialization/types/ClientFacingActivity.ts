/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingHeartRate } from "./ClientFacingHeartRate";

export const ClientFacingActivity: core.serialization.ObjectSchema<
    serializers.ClientFacingActivity.Raw,
    Vital.ClientFacingActivity
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    id: core.serialization.string(),
    date: core.serialization.date(),
    calendarDate: core.serialization.property("calendar_date", core.serialization.string()),
    caloriesTotal: core.serialization.property("calories_total", core.serialization.number().optional()),
    caloriesActive: core.serialization.property("calories_active", core.serialization.number().optional()),
    steps: core.serialization.number().optional(),
    dailyMovement: core.serialization.property("daily_movement", core.serialization.number().optional()),
    distance: core.serialization.number().optional(),
    low: core.serialization.number().optional(),
    medium: core.serialization.number().optional(),
    high: core.serialization.number().optional(),
    source: ClientFacingSource,
    floorsClimbed: core.serialization.property("floors_climbed", core.serialization.number().optional()),
    timeZone: core.serialization.property("time_zone", core.serialization.string().optional()),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    heartRate: core.serialization.property("heart_rate", ClientFacingHeartRate.optional()),
});

export declare namespace ClientFacingActivity {
    interface Raw {
        user_id: string;
        id: string;
        date: string;
        calendar_date: string;
        calories_total?: number | null;
        calories_active?: number | null;
        steps?: number | null;
        daily_movement?: number | null;
        distance?: number | null;
        low?: number | null;
        medium?: number | null;
        high?: number | null;
        source: ClientFacingSource.Raw;
        floors_climbed?: number | null;
        time_zone?: string | null;
        timezone_offset?: number | null;
        heart_rate?: ClientFacingHeartRate.Raw | null;
    }
}
