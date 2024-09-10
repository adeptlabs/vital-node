/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { QueryInstructionSelect } from "./QueryInstructionSelect";
import { QueryInstructionPartitionBy } from "./QueryInstructionPartitionBy";
import { Swizzling } from "./Swizzling";
import { Reducer } from "./Reducer";

export const QueryInstruction: core.serialization.ObjectSchema<
    serializers.QueryInstruction.Raw,
    Vital.QueryInstruction
> = core.serialization.object({
    select: QueryInstructionSelect,
    partitionBy: core.serialization.property("partition_by", QueryInstructionPartitionBy),
    swizzleBy: core.serialization.property("swizzle_by", Swizzling.optional()),
    reduceBy: core.serialization.property("reduce_by", core.serialization.list(Reducer)),
    splitBySource: core.serialization.property("split_by_source", core.serialization.boolean().optional()),
});

export declare namespace QueryInstruction {
    interface Raw {
        select: QueryInstructionSelect.Raw;
        partition_by: QueryInstructionPartitionBy.Raw;
        swizzle_by?: Swizzling.Raw | null;
        reduce_by: Reducer.Raw[];
        split_by_source?: boolean | null;
    }
}
