/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UserCreateBody {
    /** A unique ID representing the end user. Typically this will be a user ID from your application. Personally identifiable information, such as an email address or phone number, should not be used in the client_user_id. */
    clientUserId: string;
    /**
     *     Fallback time zone of the user, in the form of a valid IANA tzdatabase identifier (e.g., `Europe/London` or `America/Los_Angeles`).
     *     Used when pulling data from sources that are completely time zone agnostic (e.g., all time is relative to UTC clock, without any time zone attributions on data points).
     *
     */
    fallbackTimeZone?: string;
}
