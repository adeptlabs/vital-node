/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSleepCycleChangedEventType } from "./ClientFacingSleepCycleChangedEventType";
import { ClientFacingSleepCycle } from "./ClientFacingSleepCycle";

export const ClientFacingSleepCycleChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingSleepCycleChanged.Raw,
    Vital.ClientFacingSleepCycleChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingSleepCycleChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: ClientFacingSleepCycle,
});

export declare namespace ClientFacingSleepCycleChanged {
    interface Raw {
        event_type: ClientFacingSleepCycleChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: ClientFacingSleepCycle.Raw;
    }
}
