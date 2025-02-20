/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingWeightChangedEventType } from "./ClientFacingWeightChangedEventType";
import { GroupedBodyWeight } from "./GroupedBodyWeight";

export const ClientFacingWeightChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingWeightChanged.Raw,
    Vital.ClientFacingWeightChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingWeightChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedBodyWeight,
});

export declare namespace ClientFacingWeightChanged {
    interface Raw {
        event_type: ClientFacingWeightChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedBodyWeight.Raw;
    }
}
