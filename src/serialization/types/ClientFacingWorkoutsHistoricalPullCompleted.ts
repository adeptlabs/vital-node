/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { HistoricalPullCompleted } from "./HistoricalPullCompleted";

export const ClientFacingWorkoutsHistoricalPullCompleted: core.serialization.ObjectSchema<
    serializers.ClientFacingWorkoutsHistoricalPullCompleted.Raw,
    Vital.ClientFacingWorkoutsHistoricalPullCompleted
> = core.serialization.object({
    eventType: core.serialization.property(
        "event_type",
        core.serialization.stringLiteral("historical.data.workouts.created")
    ),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: HistoricalPullCompleted,
});

export declare namespace ClientFacingWorkoutsHistoricalPullCompleted {
    interface Raw {
        event_type: "historical.data.workouts.created";
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: HistoricalPullCompleted.Raw;
    }
}
