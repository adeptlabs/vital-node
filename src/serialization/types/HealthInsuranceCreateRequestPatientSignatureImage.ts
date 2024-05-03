/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { Jpeg } from "./Jpeg";
import { Png } from "./Png";

export const HealthInsuranceCreateRequestPatientSignatureImage: core.serialization.Schema<
    serializers.HealthInsuranceCreateRequestPatientSignatureImage.Raw,
    Vital.HealthInsuranceCreateRequestPatientSignatureImage
> = core.serialization
    .union(core.serialization.discriminant("contentType", "content_type"), {
        "image/jpeg": Jpeg,
        "image/png": Png,
    })
    .transform<Vital.HealthInsuranceCreateRequestPatientSignatureImage>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace HealthInsuranceCreateRequestPatientSignatureImage {
    type Raw =
        | HealthInsuranceCreateRequestPatientSignatureImage.ImageJpeg
        | HealthInsuranceCreateRequestPatientSignatureImage.ImagePng;

    interface ImageJpeg extends Jpeg.Raw {
        content_type: "image/jpeg";
    }

    interface ImagePng extends Png.Raw {
        content_type: "image/png";
    }
}
