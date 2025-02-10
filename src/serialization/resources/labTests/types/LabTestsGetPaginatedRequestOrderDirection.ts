/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";

export const LabTestsGetPaginatedRequestOrderDirection: core.serialization.Schema<
    serializers.LabTestsGetPaginatedRequestOrderDirection.Raw,
    Vital.LabTestsGetPaginatedRequestOrderDirection
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace LabTestsGetPaginatedRequestOrderDirection {
    type Raw = "asc" | "desc";
}
