import type {
  Faculty,
  RequestHeaders,
  SortingOptions,
  University,
} from '@/types.js';

interface FindManyUniversityArgs {
  sorting?: SortingOptions;
}

interface FindManyUniversityFacultiesArgs {
  id: number;
}

interface CreateUniversityValues {
  name: string;
  brief: string;
}

interface CreateUniversityArgs {
  data: CreateUniversityValues;
  headers: RequestHeaders;
}

interface UpdateUniversityValues extends CreateUniversityValues {
  id: number;
}

interface UpdateUniversityArgs {
  data: UpdateUniversityValues;
  headers: RequestHeaders;
}

interface DeleteUniversityArgs {
  id: number;
  headers: RequestHeaders;
}

interface IUniversitiesModule {
  findMany: (args?: FindManyUniversityArgs) => Promise<University[]>;
  findOneFaculties: (
    args: FindManyUniversityFacultiesArgs,
  ) => Promise<Faculty[]>;
  createOne: (args: CreateUniversityArgs) => Promise<University>;
  updateOne: (args: UpdateUniversityArgs) => Promise<University>;
  deleteOne: (args: DeleteUniversityArgs) => Promise<University>;
}

export type {
  CreateUniversityArgs,
  CreateUniversityValues,
  DeleteUniversityArgs,
  FindManyUniversityArgs,
  FindManyUniversityFacultiesArgs,
  IUniversitiesModule,
  UpdateUniversityArgs,
  UpdateUniversityValues,
};
