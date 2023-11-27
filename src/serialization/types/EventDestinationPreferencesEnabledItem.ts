/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const EventDestinationPreferencesEnabledItem: core.serialization.Schema<
    serializers.EventDestinationPreferencesEnabledItem.Raw,
    Vital.EventDestinationPreferencesEnabledItem
> = core.serialization.enum_(["cloud_pubsub", "rabbitmq", "svix"]);

export declare namespace EventDestinationPreferencesEnabledItem {
    type Raw = "cloud_pubsub" | "rabbitmq" | "svix";
}
