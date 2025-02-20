/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ClientFacingBodyTemperatureChangedEventType =
    | "daily.data.body_temperature.created"
    | "daily.data.body_temperature.updated";

export const ClientFacingBodyTemperatureChangedEventType = {
    DailyDataBodyTemperatureCreated: "daily.data.body_temperature.created",
    DailyDataBodyTemperatureUpdated: "daily.data.body_temperature.updated",
} as const;
