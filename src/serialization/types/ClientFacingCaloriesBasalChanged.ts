/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingCaloriesBasalChangedEventType } from "./ClientFacingCaloriesBasalChangedEventType";
import { GroupedCaloriesBasal } from "./GroupedCaloriesBasal";

export const ClientFacingCaloriesBasalChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingCaloriesBasalChanged.Raw,
    Vital.ClientFacingCaloriesBasalChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingCaloriesBasalChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedCaloriesBasal,
});

export declare namespace ClientFacingCaloriesBasalChanged {
    interface Raw {
        event_type: ClientFacingCaloriesBasalChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedCaloriesBasal.Raw;
    }
}
