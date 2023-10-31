/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingProviderWithStatus {
    /** Name of source of information */
    name: string;
    /** Slug for designated source */
    slug: string;
    /** URL for source logo */
    logo: string;
    /** Status of source, either error or connected */
    status: string;
}
