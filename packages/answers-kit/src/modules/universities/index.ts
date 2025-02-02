import type { Faculty, University } from '@/types.js';
import { getDefaultHeaders } from '@/utils/headers.js';
import { handleResult } from '@/utils/result.js';
import { appendSortingParams } from '@/utils/url.js';
import type { DeleteFacultyArgs } from '../faculties/types.js';
import type {
  CreateUniversityArgs,
  FindManyUniversityArgs,
  FindManyUniversityFacultiesArgs,
  IUniversitiesModule,
  UpdateUniversityArgs,
} from './types.js';

export class UniversitiesModule implements IUniversitiesModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Find an university by id
   *
   * @example Example usage:
   * ```ts
   * const university = await answersKit.universities.findOne(1)
   * ```
   *
   * @returns an university object
   *
   * @publicApi
   * */
  async findOne(id: number): Promise<University> {
    const response = await fetch(`${this.url}/universities/${id}`);

    return handleResult<University>(response);
  }

  /**
   * Retrieve a list of all universities
   *
   * @example Example usage:
   * ```ts
   * // Get all universities
   * const universities = await module.findMany()
   *
   * // Get universities with sorting
   * const sortedUniversities = await module.findMany({
   *   sorting: { orderBy: 'name', order: 'asc' }
   * })
   * ```
   *
   * @param args Optional sorting parameters
   * @returns Promise resolving to array of University objects
   *
   * @publicApi
   */
  async findMany(args?: FindManyUniversityArgs): Promise<University[]> {
    const url = appendSortingParams(`${this.url}/universities`, args?.sorting);
    const response = await fetch(url);

    return response.json();
  }

  /**
   * Get all faculties for a specific university
   *
   * @example Example usage:
   * ```ts
   * const faculties = await module.findOneFaculties({ id: 1 })
   * ```
   *
   * @param args Object containing university id
   * @returns Promise resolving to array of Faculty objects
   *
   * @publicApi
   */
  async findOneFaculties({
    id,
  }: FindManyUniversityFacultiesArgs): Promise<Faculty[]> {
    const response = await fetch(`${this.url}/universities/${id}/faculties`);

    return response.json();
  }

  /**
   * Create a new university
   *
   * @example Example usage:
   * ```ts
   * const newUniversity = await module.createOne({
   *   data: {
   *     name: "University Name",
   *     brief: "Brief"
   *   },
   *   headers: {
   *     authorization: "Bearer token"
   *   }
   * })
   * ```
   *
   * @param args Object containing university data and auth headers
   * @returns Promise resolving to created University object
   *
   * @publicApi
   */
  async createOne({
    data,
    headers,
  }: CreateUniversityArgs): Promise<University> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/universities`, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(data),
    });

    return handleResult<University>(response);
  }

  /**
   * Update an existing university
   *
   * @example Example usage:
   * ```ts
   * const updatedUniversity = await module.updateOne({
   *   data: {
   *     id: 1,
   *     name: "New Name",
   *     brief: "New description"
   *   },
   *   headers: {
   *     authorization: "Bearer token"
   *   }
   * })
   * ```
   *
   * @param args Object containing updated university data and auth headers
   * @returns Promise resolving to updated University object
   *
   * @publicApi
   */
  async updateOne({
    data,
    headers,
  }: UpdateUniversityArgs): Promise<University> {
    const { id, ...rest } = data;

    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/universities/${id}`, {
      method: 'PUT',
      headers: h,
      body: JSON.stringify(rest),
    });

    return handleResult<University>(response);
  }

  /**
   * Delete a university by id
   *
   * @example Example usage:
   * ```ts
   * const deletedUniversity = await module.deleteOne({
   *   id: 1,
   *   headers: {
   *     authorization: "Bearer token"
   *   }
   * })
   * ```
   *
   * @param args Object containing university id and auth headers
   * @returns Promise resolving to deleted University object
   *
   * @publicApi
   */
  async deleteOne({ id, headers }: DeleteFacultyArgs): Promise<University> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/universities/${id}`, {
      method: 'DELETE',
      headers: h,
      body: JSON.stringify({}),
    });

    return handleResult<University>(response);
  }
}
