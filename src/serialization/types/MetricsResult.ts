/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { TimeseriesMetricPoint } from "./TimeseriesMetricPoint";

export const MetricsResult: core.serialization.ObjectSchema<serializers.MetricsResult.Raw, Vital.MetricsResult> =
    core.serialization.object({
        teamId: core.serialization.property("team_id", core.serialization.string()),
        numberOfConnectedSources: core.serialization.property(
            "number_of_connected_sources",
            core.serialization.number().optional()
        ),
        numberOfUsers: core.serialization.property("number_of_users", core.serialization.number().optional()),
        numberOfErroredConnectedSources: core.serialization.property(
            "number_of_errored_connected_sources",
            core.serialization.number().optional()
        ),
        numberOfConnectedSourcesByWeek: core.serialization.property(
            "number_of_connected_sources_by_week",
            core.serialization.list(TimeseriesMetricPoint).optional()
        ),
        numberOfOrderedTests: core.serialization.property(
            "number_of_ordered_tests",
            core.serialization.number().optional()
        ),
    });

export declare namespace MetricsResult {
    interface Raw {
        team_id: string;
        number_of_connected_sources?: number | null;
        number_of_users?: number | null;
        number_of_errored_connected_sources?: number | null;
        number_of_connected_sources_by_week?: TimeseriesMetricPoint.Raw[] | null;
        number_of_ordered_tests?: number | null;
    }
}
