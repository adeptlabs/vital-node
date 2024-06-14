/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { SingleUserResourceResponse } from "./SingleUserResourceResponse";

export const UserResourcesResponse: core.serialization.ObjectSchema<
    serializers.UserResourcesResponse.Raw,
    Vital.UserResourcesResponse
> = core.serialization.object({
    data: core.serialization.list(SingleUserResourceResponse),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace UserResourcesResponse {
    interface Raw {
        data: SingleUserResourceResponse.Raw[];
        next?: string | null;
        next_cursor?: string | null;
    }
}
