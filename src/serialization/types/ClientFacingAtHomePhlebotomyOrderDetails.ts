/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { ClientFacingAtHomePhlebotomyOrder } from "./ClientFacingAtHomePhlebotomyOrder";

export const ClientFacingAtHomePhlebotomyOrderDetails: core.serialization.ObjectSchema<
    serializers.ClientFacingAtHomePhlebotomyOrderDetails.Raw,
    Vital.ClientFacingAtHomePhlebotomyOrderDetails
> = core.serialization.object({
    data: ClientFacingAtHomePhlebotomyOrder.optional(),
});

export declare namespace ClientFacingAtHomePhlebotomyOrderDetails {
    interface Raw {
        data?: ClientFacingAtHomePhlebotomyOrder.Raw | null;
    }
}
