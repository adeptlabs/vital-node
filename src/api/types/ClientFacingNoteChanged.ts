/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingNoteChanged {
    eventType: Vital.ClientFacingNoteChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedNote;
}
