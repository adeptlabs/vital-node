/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vital from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Introspect {
    interface Options {
        environment?: core.Supplier<environments.VitalEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Introspect {
    constructor(protected readonly _options: Introspect.Options = {}) {}

    /**
     * @param {Vital.IntrospectGetUserResourcesRequest} request
     * @param {Introspect.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await client.introspect.getUserResources()
     */
    public async getUserResources(
        request: Vital.IntrospectGetUserResourcesRequest = {},
        requestOptions?: Introspect.RequestOptions
    ): Promise<Vital.UserResourcesResponse> {
        const { userId, provider, userLimit, cursor, nextCursor } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (userId != null) {
            _queryParams["user_id"] = userId;
        }

        if (provider != null) {
            _queryParams["provider"] = provider;
        }

        if (userLimit != null) {
            _queryParams["user_limit"] = userLimit.toString();
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (nextCursor != null) {
            _queryParams["next_cursor"] = nextCursor;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                "v2/introspect/resources"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.91",
                "User-Agent": "@tryvital/vital-node/3.1.91",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UserResourcesResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vital.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VitalError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VitalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VitalTimeoutError();
            case "unknown":
                throw new errors.VitalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Vital.IntrospectGetUserHistoricalPullsRequest} request
     * @param {Introspect.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await client.introspect.getUserHistoricalPulls()
     */
    public async getUserHistoricalPulls(
        request: Vital.IntrospectGetUserHistoricalPullsRequest = {},
        requestOptions?: Introspect.RequestOptions
    ): Promise<Vital.UserHistoricalPullsResponse> {
        const { userId, provider, userLimit, cursor, nextCursor } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (userId != null) {
            _queryParams["user_id"] = userId;
        }

        if (provider != null) {
            _queryParams["provider"] = provider;
        }

        if (userLimit != null) {
            _queryParams["user_limit"] = userLimit.toString();
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (nextCursor != null) {
            _queryParams["next_cursor"] = nextCursor;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                "v2/introspect/historical_pull"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.91",
                "User-Agent": "@tryvital/vital-node/3.1.91",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.UserHistoricalPullsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vital.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VitalError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VitalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VitalTimeoutError();
            case "unknown":
                throw new errors.VitalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-vital-api-key": apiKeyValue };
    }
}
