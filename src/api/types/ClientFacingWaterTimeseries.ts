/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingWaterTimeseries {
    /** Deprecated */
    id?: number;
    /** Time zone UTC offset in seconds. Positive offset indicates east of UTC; negative offset indicates west of UTC; and null indicates the time zone information is unavailable at source. */
    timezoneOffset?: number;
    /** The reading type of the measurement. This is applicable only to Cholesterol, IGG, IGE and InsulinInjection. */
    type?: string;
    /** Measured in milliters. */
    unit: string;
    grouping?: Vital.ClientFacingSampleGroupingKeys;
    /** The timestamp of the measurement. */
    timestamp: Date;
    /** Quantity of water drank during the time period. */
    value: number;
}
