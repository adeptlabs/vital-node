/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface SingleUserHistoricalPullResponse {
    userId: string;
    provider: Record<string, Vital.SingleProviderHistoricalPullResponse>;
}
