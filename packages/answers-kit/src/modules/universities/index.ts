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

  async findMany(args?: FindManyUniversityArgs): Promise<University[]> {
    const url = appendSortingParams(`${this.url}/universities`, args?.sorting);
    const response = await fetch(url);

    return response.json();
  }

  async findOneFaculties({
    id,
  }: FindManyUniversityFacultiesArgs): Promise<Faculty[]> {
    const response = await fetch(`${this.url}/universities/${id}/faculties`);

    return response.json();
  }

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
