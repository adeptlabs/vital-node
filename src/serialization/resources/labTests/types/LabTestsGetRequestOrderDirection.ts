/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";

export const LabTestsGetRequestOrderDirection: core.serialization.Schema<
    serializers.LabTestsGetRequestOrderDirection.Raw,
    Vital.LabTestsGetRequestOrderDirection
> = core.serialization.enum_(["asc", "desc"]);

export declare namespace LabTestsGetRequestOrderDirection {
    type Raw = "asc" | "desc";
}
