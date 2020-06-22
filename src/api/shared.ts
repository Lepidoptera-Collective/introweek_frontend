const jsonMimeType = 'application/json';

export const acceptJson: Readonly<Record<string, string>> = {
  Accept: jsonMimeType,
};

export const postJson: Readonly<Record<string, string>> = {
  'Content-Type': jsonMimeType,
};

export const authHeader = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`,
});
