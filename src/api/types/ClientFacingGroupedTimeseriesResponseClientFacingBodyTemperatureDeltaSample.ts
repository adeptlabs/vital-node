/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ClientFacingGroupedTimeseriesResponseClientFacingBodyTemperatureDeltaSample {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.ClientFacingTimeseriesGroupClientFacingBodyTemperatureDeltaSample[]>;
    next?: string;
    nextCursor?: string;
}
