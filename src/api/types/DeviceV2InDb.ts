/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface DeviceV2InDb {
    data: Record<string, unknown>;
    providerId: string;
    userId: string;
    sourceId: number;
    id: string;
    source: Vital.ClientFacingProvider;
}
