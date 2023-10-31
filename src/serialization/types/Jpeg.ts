/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const Jpeg: core.serialization.ObjectSchema<serializers.Jpeg.Raw, Vital.Jpeg> = core.serialization.object({
    content: core.serialization.string(),
});

export declare namespace Jpeg {
    interface Raw {
        content: string;
    }
}
