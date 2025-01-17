import { AnswersError } from '@/error.js';

export const handleResult = async <T>(response: Response): Promise<T> => {
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new AnswersError(result.message, response.status);
};
