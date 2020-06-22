import { unwrapResponse } from 'api/response';
import { postJson } from 'api/shared';
import { ApiClientEndpoint } from 'api/types';

interface EnrollRequest {
  email: string;
  additionalInfo?: {
    study: string; // TODO: Create enum for study types
  };
}

interface EnrollResponse {}

export const enroll: ApiClientEndpoint<EnrollRequest, EnrollResponse> = async (apiUrl, request) => {
  return unwrapResponse<EnrollResponse>(
    await fetch(`${apiUrl}/enroll`, {
      method: 'POST',
      headers: {
        ...postJson,
      },
      body: JSON.stringify(request),
    })
  );
};
