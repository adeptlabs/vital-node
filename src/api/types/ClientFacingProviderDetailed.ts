/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingProviderDetailed {
    /** Name of source of information */
    name: string;
    /** Slug for designated source */
    slug: string;
    /** Description of source of information */
    description: string;
    /** URL for source logo */
    logo?: string;
    authType?: Vital.SourceAuthType;
    supportedResources?: Vital.ClientFacingResource[];
}
