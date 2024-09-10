/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Jpeg } from "./Jpeg";
import { Png } from "./Png";

export const PhysicianCreateRequestSignatureImage: core.serialization.Schema<
    serializers.PhysicianCreateRequestSignatureImage.Raw,
    Vital.PhysicianCreateRequestSignatureImage
> = core.serialization.undiscriminatedUnion([Jpeg, Png]);

export declare namespace PhysicianCreateRequestSignatureImage {
    type Raw = Jpeg.Raw | Png.Raw;
}
