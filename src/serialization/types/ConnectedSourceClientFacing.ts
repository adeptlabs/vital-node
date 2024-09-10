/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingProvider } from "./ClientFacingProvider";

export const ConnectedSourceClientFacing: core.serialization.ObjectSchema<
    serializers.ConnectedSourceClientFacing.Raw,
    Vital.ConnectedSourceClientFacing
> = core.serialization.object({
    provider: ClientFacingProvider,
    createdOn: core.serialization.property("created_on", core.serialization.string()),
    source: ClientFacingProvider,
});

export declare namespace ConnectedSourceClientFacing {
    interface Raw {
        provider: ClientFacingProvider.Raw;
        created_on: string;
        source: ClientFacingProvider.Raw;
    }
}
