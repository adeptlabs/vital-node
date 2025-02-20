/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Schema for a walk-in test order in the client facing API.
 *
 * To be used as part of a ClientFacingOrder.
 */
export interface ClientFacingWalkInTestOrder {
    /** The Vital walk-in test Order ID */
    id: string;
    createdAt: Date;
    updatedAt: Date;
    appointmentId?: string;
}
