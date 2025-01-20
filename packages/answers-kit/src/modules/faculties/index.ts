import type { Faculty, Subject } from '@/types.js';
import { getDefaultHeaders } from '@/utils/headers.js';
import { handleResult } from '@/utils/result.js';
import type {
  CreateFacultyArgs,
  DeleteFacultyArgs,
  IFacultiesModule,
  UpdateFacultyArgs,
} from './types.js';

export class FacultiesModule implements IFacultiesModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Find all faculties
   *
   * @example Example usage:
   * ```ts
   * const faculty = await answersKit.faculties.findMany()
   * ```
   *
   * @returns an array of faculty objects
   *
   * @publicApi
   * */

  async findMany(): Promise<Faculty[]> {
    const response = await fetch(`${this.url}/faculties`);

    return response.json();
  }

  /**
   * Get faculty subjects
   *
   * @example Example usage:
   * ```ts
   * const subjects = await answersKit.faculties.getFacultySubjects(1)
   * ```
   *
   * @returns an array of subject objects
   *
   * @publicApi
   * */

  async getFacultySubjects(id: number): Promise<Subject[]> {
    const response = await fetch(`${this.url}/faculties/${id}/subjects`);

    return response.json();
  }

  /**
   * Create a faculty
   *
   * @example Example usage:
   * ```ts
   * const faculty = await answersKit.faculties.createOne({
   *   data: { name: 'Faculty of Science', brief: 'Science', universityId: 1 },
   *   headers: {
   *     authorization: 'your-answers-auth-token'
   *   },
   * })
   * ```
   *
   * @returns an created faculty object
   *
   * @publicApi
   * */

  async createOne({ data, headers }: CreateFacultyArgs): Promise<Faculty> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/faculties`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: h,
    });

    return handleResult<Faculty>(response);
  }

  /**
   * Update a faculty
   *
   * @example Example usage:
   * ```ts
   * const faculty = await answersKit.faculties.updateOne({
   *   data: { id: 1, name: 'Faculty of Science', brief: 'Science', universityId: 1 },
   *   headers: {
   *     authorization: 'your-answers-auth-token'
   *   },
   * })
   * ```
   *
   * @returns an updated faculty object
   *
   * @publicApi
   * */

  async updateOne({ data, headers }: UpdateFacultyArgs): Promise<Faculty> {
    const { id, ...rest } = data;

    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/faculties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(rest),
      headers: h,
    });

    return handleResult<Faculty>(response);
  }

  /**
   * Delete a faculty
   *
   * @example Example usage:
   * ```ts
   * const faculty = await answersKit.faculties.deleteOne({
   *   id: 1,
   *   headers: {
   *     authorization: 'your-answers-auth-token'
   *  },
   * })
   *
   * @returns a faculty object
   *
   * @publicApi
   * */

  async deleteOne({ id, headers }: DeleteFacultyArgs): Promise<Faculty> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/faculties/${id}`, {
      method: 'DELETE',
      headers: h,
      body: JSON.stringify({}),
    });

    return handleResult<Faculty>(response);
  }
}
