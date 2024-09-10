/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         numberOfLabels: 1,
 *         collectionDate: "2024-01-15T09:30:00Z"
 *     }
 */
export interface LabTestsGetLabelsPdfRequest {
    /**
     * Number of labels to generate
     */
    numberOfLabels?: number;
    /**
     * Collection date
     */
    collectionDate: Date;
}
