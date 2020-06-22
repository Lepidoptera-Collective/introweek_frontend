export type ApiClientEndpointOptionalRequest<TRequest, TResponse> = (
  apiUrl: string,
  request?: TRequest
) => Promise<TResponse>;

export type ApiClientEndpoint<TRequest, TResponse> = (
  apiUrl: string,
  request: TRequest
) => Promise<TResponse>;

export type ApiClientEndpointAuthorized<TRequest, TResponse> = (
  apiUrl: string,
  accessToken: string,
  request: TRequest
) => Promise<TResponse>;

export type ApiClientEndpointAuthorizedOptionalRequest<TRequest, TResponse> = (
  apiUrl: string,
  accessToken: string,
  request?: TRequest
) => Promise<TResponse>;
