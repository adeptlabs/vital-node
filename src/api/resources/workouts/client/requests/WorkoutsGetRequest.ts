/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         startDate: "start_date"
 *     }
 */
export interface WorkoutsGetRequest {
    /**
     * Provider oura/strava etc
     */
    provider?: string;
    /**
     * Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    startDate: string;
    /**
     * Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59
     */
    endDate?: string;
}
