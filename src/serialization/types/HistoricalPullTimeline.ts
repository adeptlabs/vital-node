/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const HistoricalPullTimeline: core.serialization.ObjectSchema<
    serializers.HistoricalPullTimeline.Raw,
    Vital.HistoricalPullTimeline
> = core.serialization.object({
    scheduledAt: core.serialization.property("scheduled_at", core.serialization.date()),
    startedAt: core.serialization.property("started_at", core.serialization.date().optional()),
    endedAt: core.serialization.property("ended_at", core.serialization.date().optional()),
});

export declare namespace HistoricalPullTimeline {
    interface Raw {
        scheduled_at: string;
        started_at?: string | null;
        ended_at?: string | null;
    }
}
