/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface GroupedHypnogramResponse {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.GroupedHypnogram[]>;
    /** The cursor for fetching the next page, or `null` if there is no more data. */
    next?: string;
}
