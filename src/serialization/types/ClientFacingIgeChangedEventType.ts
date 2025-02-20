/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingIgeChangedEventType: core.serialization.Schema<
    serializers.ClientFacingIgeChangedEventType.Raw,
    Vital.ClientFacingIgeChangedEventType
> = core.serialization.enum_(["daily.data.ige.created", "daily.data.ige.updated"]);

export declare namespace ClientFacingIgeChangedEventType {
    type Raw = "daily.data.ige.created" | "daily.data.ige.updated";
}
