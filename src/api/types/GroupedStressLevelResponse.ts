/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface GroupedStressLevelResponse {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.GroupedStressLevel[]>;
    next?: string;
    nextCursor?: string;
}
