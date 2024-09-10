/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

/**
 * The Swizzling mode makes the reducer functions produce statistics
 * based on X-of-Y granularity (e.g., day-of-week) for each and every data partition.
 *
 * ## Basic usages
 *
 * - Hour of Day — gather_every={1, hour}, bin_granularity=day, bin_count=1
 * - Day of Week — gather_every={1, day}, bin_granularity=week, bin_count=1
 * - Day of Month — gather_every={1, day}, bin_granularity=month, bin_count=1
 *
 * ## Output columns
 *
 * Swizzling mode adds two additional columns to the output dataframes:
 *
 * 1. `swizzle_bin`: The bin index of the data point post-binning (with respect to `bin_count`
 *    and `bin_granularity); and 2 `swizzle_period_start`: The bin-relative period start of the data point with respect to `gather_every`.
 *
 * ## Supported combinations
 *
 * | gather_every | group_by          |
 * | ------------ | ----------------- |
 * | minute       | minute, hour, day |
 * | hour         | hour, day, week   |
 * | day          | day, week, month  |
 * | week         | week, month       |
 * | month        | month             |
 */
export interface Swizzling {
    binGranularity: Vital.SwizzlingBinGranularity;
    binCount?: number;
    gatherEvery: Vital.Period;
}
