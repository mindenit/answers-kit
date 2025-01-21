import type { Question, Test } from '@/types.js';
import { getDefaultHeaders } from '@/utils/headers.js';
import { handleResult } from '@/utils/result.js';
import { appendSortingParams } from '@/utils/url.js';
import type {
  CreateTestArgs,
  CreateTestQuestionsArgs,
  DeleteTestArgs,
  FindManyTestArgs,
  FindOneTestArgs,
  FindTestQuestionsArgs,
  ITestsModule,
  UpdateTestArgs,
} from './types.js';

export class TestsModule implements ITestsModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Find a test by id
   *
   * @example Example usage:
   * ```ts
   * const test = await answersKit.tests.findOne({ id: 1 })
   * ```
   *
   * @returns a test object
   *
   * @publicApi
   * */

  async findOne({ id }: FindOneTestArgs): Promise<Test> {
    const response = await fetch(`${this.url}/test/${id}`);

    return handleResult<Test>(response);
  }

  /**
   * Find all tests
   *
   * @example Example usage:
   * ```ts
   * const tests = await answersKit.tests.findMany()
   * ```
   *
   * @returns an array of test objects
   *
   * @publicApi
   * */

  async findMany(args?: FindManyTestArgs): Promise<Test[]> {
    const url = appendSortingParams(`${this.url}/tests`, args?.sorting);
    const response = await fetch(url);

    return response.json();
  }

  /**
   * Create a new test
   *
   * @example Example usage:
   * ```ts
   * const test = await answersKit.tests.createOne({
   *   data: {
   *     name: 'Test name',
   *     isVerified: false,
   *     year: 2025,
   *     courseId: 1,
   *     subjectId: 1,
   *   },
   *   headers: {
   *     authorization: 'your-answers-token',
   *   },
   * })
   * ```
   *
   * @returns a test object
   *
   * @publicApi
   * */

  async createOne({ data, headers }: CreateTestArgs): Promise<Test> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/tests`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(data),
    });

    return handleResult<Test>(response);
  }

  /**
   * Update a test
   *
   * @example Example usage:
   * ```ts
   * const test = await answersKit.tests.updateOne({
   *   data: {
   *     id: 1,
   *     name: 'Test name',
   *     isVerified: false,
   *     year: 2025,
   *     courseId: 1,
   *     subjectId: 1,
   *   },
   *   headers: {
   *     authorization: 'your-answers-token',
   *   },
   * });
   * ```
   *
   * @returns an updated test object
   *
   * @publicApi
   */

  async updateOne({ data, headers }: UpdateTestArgs): Promise<Test> {
    const { id, ...rest } = data;

    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/tests/${data.id}`, {
      method: 'PUT',
      headers: h,
      body: JSON.stringify(rest),
    });

    return handleResult<Test>(response);
  }

  /**
   * Delete a test
   *
   * @example Example usage:
   * ```ts
   * await answersKit.tests.deleteOne({
   *   id: 1,
   *   headers: {
   *     authorization: 'your-answers-token',
   *  },
   * })
   * ```
   *
   * @returns a test object
   *
   * @publicApi
   *
   * */

  async deleteOne({ id, headers }: DeleteTestArgs): Promise<Test> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/tests/${id}`, {
      method: 'DELETE',
      headers: h,
      body: JSON.stringify({}),
    });

    return handleResult<Test>(response);
  }

  /**
   * Find all questions for a test
   *
   * @example Example usage:
   *
   * ```ts
   * const questions = await answersKit.tests.findOneQuestions({
   *   id: 1,
   *   sorting: {
   *     sortBy: 'name',
   *     order: 'asc',
   *   },
   * });
   * ```
   *
   * @returns an array of question objects
   *
   * @publicApi
   */

  async findOneQuestions({
    id,
    sorting,
  }: FindTestQuestionsArgs): Promise<Question[]> {
    const url = appendSortingParams(
      `${this.url}/tests/${id}/questions`,
      sorting,
    );
    const response = await fetch(url);

    return response.json();
  }

  async createOneQuestions({
    data,
    headers,
  }: CreateTestQuestionsArgs): Promise<Question[]> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/tests/${data.id}/questions`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(data),
    });

    return handleResult<Question[]>(response);
  }
}
