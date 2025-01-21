import type { Question } from '@/types.js';
import { getDefaultHeaders } from '@/utils/headers.js';
import { handleResult } from '@/utils/result.js';
import { appendSortingParams } from '@/utils/url.js';
import type {
  CreateQuestionArgs,
  DeleteQuestionArgs,
  FindManyQuestionArgs,
  FIndManyQuestionSearchArgs,
  IQuestionsModule,
  UpdateQuestionArgs,
} from './types.js';

export class QuestionsModule implements IQuestionsModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Retrieve a list of all questions
   *
   * @example Example usage:
   * ```ts
   * // Get all questions
   * const questions = await answersKit.questions.findMany()
   *
   * // Get questions with sorting
   * const sortedQuestions = await answersKit.questions.findMany({
   *   sorting: { sortBy: 'name', order: 'asc' }
   * })
   * ```
   *
   * @param args Optional sorting parameters
   * @returns Promise resolving to array of Question objects
   *
   * @publicApi
   */
  async findMany(args?: FindManyQuestionArgs): Promise<Question[]> {
    const url = appendSortingParams(`${this.url}/questions`, args?.sorting);
    const response = await fetch(url);

    return response.json();
  }

  /**
   * Search questions by query string
   *
   * @example Example usage:
   * ```ts
   * const questions = await answersKit.questions.findManySearch({
   *   query: "mathematics"
   * })
   * ```
   *
   * @param args Object containing search query string
   * @returns Promise resolving to array of matching Question objects
   *
   * @publicApi
   */
  async findManySearch({
    query,
  }: FIndManyQuestionSearchArgs): Promise<Question[]> {
    const url = `${this.url}/questions/search?query=${query}`;
    const response = await fetch(url);

    return response.json();
  }

  /**
   * Create a new question
   *
   * @example Example usage:
   * ```ts
   * const newQuestion = await answersKit.questions.createOne({
   *   data: {
   *     name: "What is 2+2?",
   *     answer: "4",
   *     isVerified: true,
   *     testId: 1
   *   },
   *   headers: {
   *     authorization: "Bearer token"
   *   }
   * })
   * ```
   *
   * @param args Object containing question data and auth headers
   * @returns Promise resolving to created Question object
   *
   * @publicApi
   */
  async createOne({ data, headers }: CreateQuestionArgs): Promise<Question> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/questions`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(data),
    });

    return handleResult<Question>(response);
  }

  /**
   * Update an existing question
   *
   * @example Example usage:
   * ```ts
   * const updatedQuestion = await answersKit.questions.updateOne({
   *   data: {
   *     id: 1,
   *     name: "Updated question text",
   *     answer: "New answer",
   *     isVerified: false,
   *     testId: 1
   *   },
   *   headers: {
   *     authorization: "Bearer token"
   *   }
   * })
   * ```
   *
   * @param args Object containing updated question data and auth headers
   * @returns Promise resolving to updated Question object
   *
   * @publicApi
   */
  async updateOne({ data, headers }: UpdateQuestionArgs): Promise<Question> {
    const { id, ...rest } = data;

    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/questions/${data.id}`, {
      method: 'PUT',
      headers: h,
      body: JSON.stringify(rest),
    });

    return handleResult<Question>(response);
  }

  /**
   * Delete a question by id
   *
   * @example Example usage:
   * ```ts
   * const deletedQuestion = await answersKit.questions.deleteOne({
   *   id: 1,
   *   headers: {
   *     authorization: "Bearer token"
   *   }
   * })
   * ```
   *
   * @param args Object containing question id and auth headers
   * @returns Promise resolving to deleted Question object
   *
   * @publicApi
   */
  async deleteOne({ id, headers }: DeleteQuestionArgs): Promise<Question> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/questions/${id}`, {
      method: 'DELETE',
      headers: h,
      body: JSON.stringify({}),
    });

    return handleResult<Question>(response);
  }
}
