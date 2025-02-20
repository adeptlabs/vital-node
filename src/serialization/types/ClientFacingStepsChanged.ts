/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingStepsChangedEventType } from "./ClientFacingStepsChangedEventType";
import { GroupedSteps } from "./GroupedSteps";

export const ClientFacingStepsChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingStepsChanged.Raw,
    Vital.ClientFacingStepsChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingStepsChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedSteps,
});

export declare namespace ClientFacingStepsChanged {
    interface Raw {
        event_type: ClientFacingStepsChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedSteps.Raw;
    }
}
