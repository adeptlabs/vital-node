/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Labs } from "./Labs";
import { ClientFacingLabLocation } from "./ClientFacingLabLocation";

export const PscInfo: core.serialization.ObjectSchema<serializers.PscInfo.Raw, Vital.PscInfo> =
    core.serialization.object({
        labId: core.serialization.property("lab_id", core.serialization.number()),
        slug: Labs,
        patientServiceCenters: core.serialization.property(
            "patient_service_centers",
            core.serialization.list(ClientFacingLabLocation)
        ),
    });

export declare namespace PscInfo {
    interface Raw {
        lab_id: number;
        slug: Labs.Raw;
        patient_service_centers: ClientFacingLabLocation.Raw[];
    }
}
