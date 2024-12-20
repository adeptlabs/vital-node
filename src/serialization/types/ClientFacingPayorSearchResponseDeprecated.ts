/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";

export const ClientFacingPayorSearchResponseDeprecated: core.serialization.ObjectSchema<
    serializers.ClientFacingPayorSearchResponseDeprecated.Raw,
    Vital.ClientFacingPayorSearchResponseDeprecated
> = core.serialization.object({
    code: core.serialization.string(),
    name: core.serialization.string(),
    aliases: core.serialization.list(core.serialization.string()),
    orgAddress: core.serialization.property("org_address", Address),
});

export declare namespace ClientFacingPayorSearchResponseDeprecated {
    interface Raw {
        code: string;
        name: string;
        aliases: string[];
        org_address: Address.Raw;
    }
}
