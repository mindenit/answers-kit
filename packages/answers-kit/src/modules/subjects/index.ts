import type { Subject } from '@/types.js';
import { getDefaultHeaders } from '@/utils/headers.js';
import { handleResult } from '@/utils/result.js';
import { appendSortingParams } from '@/utils/url.js';
import type {
  CreateSubjectArgs,
  DeleteSubjectArgs,
  FindManySubjectArgs,
  ISubjectModule,
  UpdateSubjectArgs,
} from './types.js';

export class SubjectsModule implements ISubjectModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Find a subject by id
   *
   * @example Example usage:
   * ```ts
   * const faculty = await answersKit.subjects.findOne(1)
   * ```
   *
   * @returns a subject object
   *
   * @publicApi
   * */
  async findOne(id: number): Promise<Subject> {
    const response = await fetch(`${this.url}/subjects/${id}`);

    return handleResult<Subject>(response);
  }

  /**
   * Find all subjects
   *
   * @example Example usage:
   * ```ts
   * const subjects = await answersKit.subjects.findMany()
   * ```
   *
   * @returns an array of subject objects
   *
   * @publicApi
   */

  async findMany(args?: FindManySubjectArgs): Promise<Subject[]> {
    const url = appendSortingParams(`${this.url}/subjects`, args?.sorting);
    const response = await fetch(url);

    return response.json();
  }

  /**
   * Create a new subject
   *
   * @example Example usage:
   * ```ts
   * const subject = await answersKit.subjects.createOne({
   *   data: {
   *     name: 'Math',
   *     brief: 'Mathematics',
   *     facultyId: 1,
   *   },
   *   headers: {
   *     authorization: 'your-another-auth-token',
   *   },
   * });
   * ```
   *
   * @returns a subject object
   *
   * @publicApi
   */

  async createOne({ data, headers }: CreateSubjectArgs): Promise<Subject> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/subjects`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(data),
    });

    return handleResult<Subject>(response);
  }

  /**
   * Update a subject
   *
   * @example Example usage:
   * ```ts
   * const subject = await answersKit.subjects.updateOne({
   *   data: {
   *     id: 1,
   *     name: 'Math',
   *     brief: 'Mathematics',
   *     facultyId: 1,
   *   },
   *   headers: {
   *     authorization: 'your-another-auth-token',
   *   },
   * });
   * ```
   *
   * @returns a subject object
   *
   * @publicApi
   */

  async updateOne({ data, headers }: UpdateSubjectArgs): Promise<Subject> {
    const { id, ...rest } = data;

    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/subjects/${id}`, {
      method: 'PUT',
      headers: h,
      body: JSON.stringify(rest),
    });

    return handleResult<Subject>(response);
  }

  /**
   * Delete a subject
   *
   * @example Example usage:
   * ```ts
   * await answersKit.subjects.deleteOne({
   *   id: 1,
   *   headers: {
   *     authorization: 'your-another-auth-token',
   *  },
   * });
   * ```
   *
   * @return a subject object
   *
   * @publicApi
   * */

  async deleteOne({ id, headers }: DeleteSubjectArgs): Promise<Subject> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/subjects/${id}`, {
      method: 'DELETE',
      headers: h,
      body: JSON.stringify({}),
    });

    return handleResult<Subject>(response);
  }
}
