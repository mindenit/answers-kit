import type { Faculty, RequestHeaders, Subject } from '@/types.js';

interface GetFacultySubjectsArgs {
  id: number;
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
  findMany: () => Promise<Faculty[]>;
  getFacultySubjects: (args: GetFacultySubjectsArgs) => Promise<Subject[]>;
  createOne: (args: CreateFacultyArgs) => Promise<Faculty>;
  updateOne: (args: UpdateFacultyArgs) => Promise<Faculty>;
  deleteOne: (args: DeleteFacultyArgs) => Promise<Faculty>;
}

export type {
  CreateFacultyArgs,
  CreateFacultyValues,
  DeleteFacultyArgs,
  GetFacultySubjectsArgs,
  IFacultiesModule,
  UpdateFacultyArgs,
  UpdateFacultyValues,
};
