import type {
  Question,
  RequestHeaders,
  SortingOptions,
  Test,
  TestData,
  TestResponse,
} from '@/types.js';

type TestSortableFields = 'year';

interface FindManyTestValues {
  offset: number;
  limit: number;
  name: string;
  isVerified: boolean;
  subjectId: number;
  courseId: number;
  year: number;
}

interface FindManyTestArgs {
  options?: FindManyTestValues;
  sorting?: SortingOptions<TestSortableFields>;
}

interface CreateTestValues {
  name: string;
  isVerified: boolean;
  year: number;
  courseId: number;
  subjectId: number;
}

interface CreateTestArgs {
  data: CreateTestValues;
  headers: RequestHeaders;
}

interface UpdateTestValues extends CreateTestValues {
  id: number;
}

interface UpdateTestArgs {
  data: UpdateTestValues;
  headers: RequestHeaders;
}

interface DeleteTestArgs {
  id: number;
  headers: RequestHeaders;
}

interface FindTestQuestionsArgs {
  id: number;
  sorting?: SortingOptions;
}

interface CreateTestQuestionsValues {
  name: string;
  answer: string;
  isVerified: boolean;
}

interface CreateTestQuestionsArgs {
  data: {
    id: number;
    questions: CreateTestQuestionsValues[];
  };
  headers: RequestHeaders;
}

interface ITestsModule {
  findOne: (id: number) => Promise<TestData>;
  findMany: (args?: FindManyTestArgs) => Promise<TestResponse>;
  findOneQuestions: (args: FindTestQuestionsArgs) => Promise<Question[]>;
  createOne: (args: CreateTestArgs) => Promise<Test>;
  updateOne: (args: UpdateTestArgs) => Promise<Test>;
  deleteOne: (args: DeleteTestArgs) => Promise<Test>;
  createOneQuestions: (args: CreateTestQuestionsArgs) => Promise<Question[]>;
}

export type {
  CreateTestArgs,
  CreateTestQuestionsArgs,
  CreateTestQuestionsValues,
  CreateTestValues,
  DeleteTestArgs,
  FindManyTestArgs,
  FindManyTestValues,
  FindTestQuestionsArgs,
  ITestsModule,
  TestSortableFields,
  UpdateTestArgs,
  UpdateTestValues,
};
