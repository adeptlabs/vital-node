/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { HistoricalPullCompleted } from "./HistoricalPullCompleted";

export const ClientFacingInsulinInjectionHistoricalPullCompleted: core.serialization.ObjectSchema<
    serializers.ClientFacingInsulinInjectionHistoricalPullCompleted.Raw,
    Vital.ClientFacingInsulinInjectionHistoricalPullCompleted
> = core.serialization.object({
    eventType: core.serialization.property(
        "event_type",
        core.serialization.stringLiteral("historical.data.insulin_injection.created")
    ),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: HistoricalPullCompleted,
});

export declare namespace ClientFacingInsulinInjectionHistoricalPullCompleted {
    interface Raw {
        event_type: "historical.data.insulin_injection.created";
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: HistoricalPullCompleted.Raw;
    }
}
