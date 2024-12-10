/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vital from "../../../../../api/index";
import * as core from "../../../../../core";
import { QueryBatchTimeframe } from "../../types/QueryBatchTimeframe";
import { Query } from "../../../../types/Query";
import { QueryConfig } from "../../../../types/QueryConfig";

export const QueryBatch: core.serialization.Schema<serializers.QueryBatch.Raw, Vital.QueryBatch> =
    core.serialization.object({
        timeframe: QueryBatchTimeframe,
        queries: core.serialization.list(Query),
        config: QueryConfig.optional(),
    });

export declare namespace QueryBatch {
    interface Raw {
        timeframe: QueryBatchTimeframe.Raw;
        queries: Query.Raw[];
        config?: QueryConfig.Raw | null;
    }
}
