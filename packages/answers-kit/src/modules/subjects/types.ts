import type { RequestHeaders, SortingOptions, Subject } from '@/types.js';

interface FIndManySubjectArgs {
  sorting?: SortingOptions;
}

interface CreateSubjectValues {
  name: string;
  brief: string;
  facultyId: number;
}

interface CreateSubjectArgs {
  data: CreateSubjectValues;
  headers: RequestHeaders;
}

interface UpdateSubjectValues extends CreateSubjectValues {
  id: number;
}

interface UpdateSubjectArgs {
  data: UpdateSubjectValues;
  headers: RequestHeaders;
}

interface DeleteSubjectArgs {
  id: number;
  headers: RequestHeaders;
}

interface ISubjectModule {
  findOne: (id: number) => Promise<Subject>;
  findMany: (args?: FIndManySubjectArgs) => Promise<Subject[]>;
  createOne: (args: CreateSubjectArgs) => Promise<Subject>;
  updateOne: (args: UpdateSubjectArgs) => Promise<Subject>;
  deleteOne: (args: DeleteSubjectArgs) => Promise<Subject>;
}

export type {
  CreateSubjectArgs,
  CreateSubjectValues,
  DeleteSubjectArgs,
  FIndManySubjectArgs,
  ISubjectModule,
  UpdateSubjectArgs,
  UpdateSubjectValues,
};
