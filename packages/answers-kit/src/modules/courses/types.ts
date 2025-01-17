import type { Course, RequestHeaders } from '@/types.js';

interface CreateCourseValues {
  number: number;
}

interface CreateCourseArgs {
  data: CreateCourseValues;
  headers: RequestHeaders;
}

interface UpdateCourseValues extends CreateCourseValues {
  id: number;
}

interface UpdateCourseArgs {
  data: UpdateCourseValues;
  headers: RequestHeaders;
}

interface DeleteCourseArgs {
  id: number;
  headers: RequestHeaders;
}

interface ICoursesModule {
  findMany: () => Promise<Course[]>;
  createOne: (args: CreateCourseArgs) => Promise<Course>;
  updateOne: (args: UpdateCourseArgs) => Promise<Course>;
  deleteOne: (args: DeleteCourseArgs) => Promise<Course>;
}

export type {
  CreateCourseArgs,
  CreateCourseValues,
  UpdateCourseArgs,
  UpdateCourseValues,
  DeleteCourseArgs,
  ICoursesModule,
};
