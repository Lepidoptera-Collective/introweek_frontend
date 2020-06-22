import { unwrapResponse } from 'api/response';
import { authHeader, acceptJson } from 'api/shared';
import { ApiClientEndpointAuthorizedOptionalRequest } from 'api/types';

// TODO: Implement proper user type when backend is ready
interface GetResponse {
  user: {
    email: string;
    [key: string]: any;
  };
}

export const get: ApiClientEndpointAuthorizedOptionalRequest<undefined, GetResponse> = async (
  apiUrl,
  accessToken
) => {
  return unwrapResponse<GetResponse>(
    await fetch(`${apiUrl}`, {
      method: 'GET',
      headers: {
        ...acceptJson,
        ...authHeader(accessToken),
      },
    })
  );
};
