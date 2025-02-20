/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface SingleHistoricalPullStatistics {
    status: Vital.HistoricalPullStatus;
    rangeStart?: Date;
    rangeEnd?: Date;
    timeline: Vital.HistoricalPullTimeline;
    daysWithData?: number;
    release: string;
    traceId?: string;
}
