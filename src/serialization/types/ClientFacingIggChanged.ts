/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingIggChangedEventType } from "./ClientFacingIggChangedEventType";
import { GroupedIgg } from "./GroupedIgg";

export const ClientFacingIggChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingIggChanged.Raw,
    Vital.ClientFacingIggChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingIggChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedIgg,
});

export declare namespace ClientFacingIggChanged {
    interface Raw {
        event_type: ClientFacingIggChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedIgg.Raw;
    }
}
