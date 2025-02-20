/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSampleGroupingKeys } from "./ClientFacingSampleGroupingKeys";

export const ClientFacingBodyWeightTimeseries: core.serialization.ObjectSchema<
    serializers.ClientFacingBodyWeightTimeseries.Raw,
    Vital.ClientFacingBodyWeightTimeseries
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unit: core.serialization.string(),
    grouping: ClientFacingSampleGroupingKeys.optional(),
    timestamp: core.serialization.date(),
    value: core.serialization.number(),
});

export declare namespace ClientFacingBodyWeightTimeseries {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: string;
        grouping?: ClientFacingSampleGroupingKeys.Raw | null;
        timestamp: string;
        value: number;
    }
}
