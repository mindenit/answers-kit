import type {
  Faculty,
  RequestHeaders,
  SortingOptions,
  Subject,
} from '@/types.js';

interface FindManyFacultyArgs {
  sorting?: SortingOptions;
}

interface CreateFacultyValues {
  name: string;
  brief: string;
  universityId: number;
}

interface CreateFacultyArgs {
  data: CreateFacultyValues;
  headers: RequestHeaders;
}

interface UpdateFacultyValues extends CreateFacultyValues {
  id: number;
}

interface UpdateFacultyArgs {
  data: UpdateFacultyValues;
  headers: RequestHeaders;
}

interface DeleteFacultyArgs {
  id: number;
  headers: RequestHeaders;
}

interface IFacultiesModule {
  findOne: (id: number) => Promise<Faculty>;
  findMany: (args?: FindManyFacultyArgs) => Promise<Faculty[]>;
  findOneSubjects: (id: number) => Promise<Subject[]>;
  createOne: (args: CreateFacultyArgs) => Promise<Faculty>;
  updateOne: (args: UpdateFacultyArgs) => Promise<Faculty>;
  deleteOne: (args: DeleteFacultyArgs) => Promise<Faculty>;
}

export type {
  CreateFacultyArgs,
  CreateFacultyValues,
  DeleteFacultyArgs,
  FindManyFacultyArgs,
  IFacultiesModule,
  UpdateFacultyArgs,
  UpdateFacultyValues,
};
