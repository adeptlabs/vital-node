/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface MenstrualCycle {
    periodStart: string;
    periodEnd?: string;
    cycleEnd?: string;
    isPredicted?: boolean;
    menstrualFlow?: Vital.MenstrualFlowEntry[];
    cervicalMucus?: Vital.CervicalMucusEntry[];
    intermenstrualBleeding?: Vital.IntermenstrualBleedingEntry[];
    contraceptive?: Vital.ContraceptiveEntry[];
    detectedDeviations?: Vital.DetectedDeviationEntry[];
    ovulationTest?: Vital.OvulationTestEntry[];
    homePregnancyTest?: Vital.HomePregnancyTestEntry[];
    homeProgesteroneTest?: Vital.HomeProgesteroneTestEntry[];
    sexualActivity?: Vital.SexualActivityEntry[];
    basalBodyTemperature?: Vital.BasalBodyTemperatureEntry[];
    source: Vital.ClientFacingSource;
}
