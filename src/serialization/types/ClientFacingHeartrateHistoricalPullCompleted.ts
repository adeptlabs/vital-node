/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { HistoricalPullCompleted } from "./HistoricalPullCompleted";

export const ClientFacingHeartrateHistoricalPullCompleted: core.serialization.ObjectSchema<
    serializers.ClientFacingHeartrateHistoricalPullCompleted.Raw,
    Vital.ClientFacingHeartrateHistoricalPullCompleted
> = core.serialization.object({
    eventType: core.serialization.property(
        "event_type",
        core.serialization.stringLiteral("historical.data.heartrate.created")
    ),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: HistoricalPullCompleted,
});

export declare namespace ClientFacingHeartrateHistoricalPullCompleted {
    interface Raw {
        event_type: "historical.data.heartrate.created";
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: HistoricalPullCompleted.Raw;
    }
}
