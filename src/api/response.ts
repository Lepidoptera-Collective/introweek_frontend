export const okOrThrow = (response: Response): void => {
  if (!response.ok) {
    throw new Error(
      `Request to ${response.url} failed: ${response.status} - ${response.statusText}.`
    );
  }
};

export const unwrapResponse = async <TResult>(response: Response): Promise<TResult> => {
  okOrThrow(response);

  return (await response.json()) as TResult;
};
