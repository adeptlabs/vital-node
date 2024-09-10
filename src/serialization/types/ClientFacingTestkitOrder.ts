/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingShipment } from "./ClientFacingShipment";

export const ClientFacingTestkitOrder: core.serialization.ObjectSchema<
    serializers.ClientFacingTestkitOrder.Raw,
    Vital.ClientFacingTestkitOrder
> = core.serialization.object({
    id: core.serialization.string(),
    shipment: ClientFacingShipment.optional(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string()),
});

export declare namespace ClientFacingTestkitOrder {
    interface Raw {
        id: string;
        shipment?: ClientFacingShipment.Raw | null;
        created_at: string;
        updated_at: string;
    }
}
