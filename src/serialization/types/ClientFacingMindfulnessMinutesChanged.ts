/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingMindfulnessMinutesChangedEventType } from "./ClientFacingMindfulnessMinutesChangedEventType";
import { GroupedMindfulnessMinutes } from "./GroupedMindfulnessMinutes";

export const ClientFacingMindfulnessMinutesChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingMindfulnessMinutesChanged.Raw,
    Vital.ClientFacingMindfulnessMinutesChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingMindfulnessMinutesChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedMindfulnessMinutes,
});

export declare namespace ClientFacingMindfulnessMinutesChanged {
    interface Raw {
        event_type: ClientFacingMindfulnessMinutesChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedMindfulnessMinutes.Raw;
    }
}
