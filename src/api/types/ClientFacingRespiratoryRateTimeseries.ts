/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingRespiratoryRateTimeseries {
    /** Deprecated */
    id?: number;
    /** Time zone UTC offset in seconds. Positive offset indicates east of UTC; negative offset indicates west of UTC; and null indicates the time zone information is unavailable at source. */
    timezoneOffset?: number;
    /** The reading type of the measurement. This is applicable only to Cholesterol, IGG and IGE. */
    type?: string;
    /** Measured in bpm. */
    unit: string;
    /** The timestamp of the measurement. */
    timestamp: Date;
    /** Average respiratory rate::breaths per minute */
    value: number;
}
