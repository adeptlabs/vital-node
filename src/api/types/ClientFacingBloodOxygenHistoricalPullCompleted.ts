/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingBloodOxygenHistoricalPullCompleted {
    eventType: "historical.data.blood_oxygen.created";
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.HistoricalPullCompleted;
}
