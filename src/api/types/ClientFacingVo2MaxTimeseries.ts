/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingVo2MaxTimeseries {
    /** Deprecated */
    id?: number;
    /** Time zone UTC offset in seconds. Positive offset indicates east of UTC; negative offset indicates west of UTC; and null indicates the time zone information is unavailable at source. */
    timezoneOffset?: number;
    /** The reading type of the measurement. This is applicable only to Cholesterol, IGG, IGE and InsulinInjection. */
    type?: string;
    /** Measured in mL/kg/min. */
    unit: string;
    /** Depracated. The start time (inclusive) of the interval. */
    timestamp: string;
    /** The start time (inclusive) of the interval. */
    start: string;
    /** The end time (exclusive) of the interval. */
    end: string;
    /** The recorded value for the interval. */
    value: number;
}
