/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingVo2MaxChangedEventType } from "./ClientFacingVo2MaxChangedEventType";
import { GroupedVo2Max } from "./GroupedVo2Max";

export const ClientFacingVo2MaxChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingVo2MaxChanged.Raw,
    Vital.ClientFacingVo2MaxChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingVo2MaxChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedVo2Max,
});

export declare namespace ClientFacingVo2MaxChanged {
    interface Raw {
        event_type: ClientFacingVo2MaxChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedVo2Max.Raw;
    }
}
