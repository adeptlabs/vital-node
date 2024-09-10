/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const Jpeg: core.serialization.ObjectSchema<serializers.Jpeg.Raw, Vital.Jpeg> = core.serialization.object({
    content: core.serialization.string(),
    contentType: core.serialization.property("content_type", core.serialization.stringLiteral("image/jpeg")),
});

export declare namespace Jpeg {
    interface Raw {
        content: string;
        content_type: "image/jpeg";
    }
}
