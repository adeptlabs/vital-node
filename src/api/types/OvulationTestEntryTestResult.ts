/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type OvulationTestEntryTestResult =
    | "negative"
    | "positive"
    | "luteinizing_hormone_surge"
    | "estrogen_surge"
    | "indeterminate";

export const OvulationTestEntryTestResult = {
    Negative: "negative",
    Positive: "positive",
    LuteinizingHormoneSurge: "luteinizing_hormone_surge",
    EstrogenSurge: "estrogen_surge",
    Indeterminate: "indeterminate",
} as const;
