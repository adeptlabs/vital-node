/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingCaloriesBasalHistoricalPullCompleted {
    eventType: "historical.data.calories_basal.created";
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.HistoricalPullCompleted;
}
