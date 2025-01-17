import type { Course } from '@/types.js';
import { getDefaultHeaders } from '@/utils/headers.js';
import { handleResult } from '@/utils/result.js';
import type {
  CreateCourseArgs,
  DeleteCourseArgs,
  ICoursesModule,
  UpdateCourseArgs,
} from './types.js';

export class CoursesModule implements ICoursesModule {
  private readonly url: string;

  constructor(client: string) {
    this.url = client;
  }

  /**
   * Find all courses
   *
   * @example Example usage:
   * ```ts
   * const course = await answersKit.courses.findMany()
   * ```
   *
   * @returns an array of course objects
   *
   * @publicApi
   */
  async findMany(): Promise<Course[]> {
    const response = await fetch(`${this.url}/courses`);

    return response.json();
  }

  /**
   * Create a course
   *
   * @example Example usage:
   * ```ts
   * const course = await answersKit.courses.createOne({
   *   data: { number: 3 },
   *   headers: {
   *     authorization: 'your-answers-auth-token'
   *   },
   * })
   * ```
   *
   * @returns an array of course objects
   *
   * @publicApi
   */
  async createOne({ data, headers }: CreateCourseArgs): Promise<Course> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/courses`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: h,
    });

    return handleResult<Course>(response);
  }

  /**
   * Update a course
   *
   * @example Example usage:
   * ```ts
   * const course = await answersKit.courses.updateOne({
   *   data: {
   *     id: 1,
   *     number: 4
   *   },
   *   headers: {
   *     authorization: 'your-answers-auth-token'
   *   },
   * })
   * ```
   *
   * @returns an array of course objects
   *
   * @publicApi
   */
  async updateOne({ data, headers }: UpdateCourseArgs): Promise<Course> {
    const { id, ...rest } = data;

    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(rest),
      headers: h,
    });

    return handleResult<Course>(response);
  }

  /**
   * Delete a course
   *
   * @example Example usage:
   * ```ts
   * const course = await answersKit.courses.deleteOne({
   *   id: 1,
   *   headers: {
   *     authorization: 'your-answers-auth-token'
   *   },
   * })
   * ```
   *
   * @returns a course object
   *
   * @publicApi
   */
  async deleteOne({ id, headers }: DeleteCourseArgs): Promise<Course> {
    const h = getDefaultHeaders();

    h.append('Authorization', headers.authorization);

    const response = await fetch(`${this.url}/courses/${id}`, {
      method: 'DELETE',
      headers: h,
    });

    return handleResult<Course>(response);
  }
}
