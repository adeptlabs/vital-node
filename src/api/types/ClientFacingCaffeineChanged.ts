/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingCaffeineChanged {
    eventType: Vital.ClientFacingCaffeineChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedCaffeine;
}
