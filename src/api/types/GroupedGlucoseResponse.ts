/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface GroupedGlucoseResponse {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.GroupedGlucose[]>;
    next?: string;
    nextCursor?: string;
}
