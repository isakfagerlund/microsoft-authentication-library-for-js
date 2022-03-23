/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export enum PerformanceEvents {
    
    /**
     * acquireTokenByCode API (msal-browser and msal-node). 
     * Used to acquire tokens by trading an authorization code against the token endpoint.
     */
    AcquireTokenByCode = "acquireTokenByCode",
    
    /**
     * acquireTokenByRefreshToken API (msal-browser and msal-node).
     * Used to renew an access token using a refresh token against the token endpoint.
     */
    AcquireTokenByRefreshToken = "acquireTokenByRefreshToken",
    
    /**
     * acquireTokenSilent API (msal-browser and msal-node).
     * Used to silently acquire a new access token (from the cache or the network).
     */
    AcquireTokenSilent = "acquireTokenSilent",
    
    /**
     * acquireTokenSilentAsync (msal-browser).
     * Internal API for acquireTokenSilent.
     */
    AcquireTokenSilentAsync = "acquireTokenSilentAsync",
    
    /**
     * getPublicKeyThumbprint API in CryptoOpts class (msal-browser).
     * Used to generate a public/private keypair and generate a public key thumbprint for pop requests.
     */
    CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint",
    
    /**
     * signJwt API in CryptoOpts class (msal-browser).
     * Used to signed a pop token.
     */
    CryptoOptsSignJwt = "cryptoOptsSignJwt",
    
    /**
     * acquireToken API in the SilentCacheClient class (msal-browser).
     * Used to read access tokens from the cache.
     */
    SilentCacheClientAcquireToken = "silentCacheClientAcquireToken",
    
    /**
     * acquireToken API in the SilentIframeClient class (msal-browser).
     * Used to acquire a new set of tokens from the authorize endpoint in a hidden iframe.
     */
    SilentIframeClientAcquireToken = "silentIframeClientAcquireToken",
    
    /**
     * acquireToken API in SilentRereshClient (msal-browser).
     * Used to acquire a new set of tokens from the token endpoint using a refresh token.
     */
    SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken",
    
    /**
     * ssoSilent API (msal-browser).
     * Used to silently acquire an authorization code and set of tokens using a hidden iframe.
     */
    SsoSilent = "ssoSilent",
    
    /**
     * getDiscoveredAuthority API in StandardInteractionClient class (msal-browser).
     * Used to load authority metadata for a request.
     */
    StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority"
}

export type PerformanceEvent = {
    /**
     * Login authority used for the request
     *
     * @type {string}
     */
    authority: string,
    
    /**
     * Client id for the application
     *
     * @type {string}
     */
    clientId: string
    
    /**
     * Correlation ID used for the request
     *
     * @type {?string}
     */
    correlationId?: string,
    
    /**
     * End-to-end duration in milliseconds.
     * @date 3/22/2022 - 3:40:05 PM
     *
     * @type {number}
     */
    durationMs: number,
    
    /**
     * Visibility of the page when the event completed.
     * Read from: https://developer.mozilla.org/docs/Web/API/Page_Visibility_API
     * 
     * @type {?(string | null)}
     */
    endPageVisibility?: string | null,
    
    /**
     * Whether the result was retrieved from the cache.
     *
     * @type {(boolean | null)}
     */
    fromCache: boolean | null,
    
    /**
     * Event name (usually in the form of classNameFunctionName)
     *
     * @type {PerformanceEvents}
     */
    name: PerformanceEvents,

    /**
     * Visibility of the page when the event completed.
     * Read from: https://developer.mozilla.org/docs/Web/API/Page_Visibility_API
     * 
     * @type {?(string | null)}
     */
    startPageVisibility?: string | null,
    
    /**
     * Unix millisecond timestamp when the event was initiated.
     *
     * @type {number}
     */
    startTimeMs: number,
    
    /**
     * Whether or the operation completed successfully.
     *
     * @type {(boolean | null)}
     */
    success: boolean | null,
    
    /**
     * Name of the library used for the operation.
     *
     * @type {string}
     */
    libraryName: string,
    
    /**
     * Version of the library used for the operation.
     *
     * @type {string}
     */
    libraryVersion: string
};