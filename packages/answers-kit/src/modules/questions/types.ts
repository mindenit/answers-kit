import type { Question, RequestHeaders, SortingOptions } from '@/types.js';

interface FindManyQuestionArgs {
  sorting?: SortingOptions;
}

interface FindManyQuestionSearchArgs {
  query: string;
}

interface CreateQuestionValues {
  name: string;
  answer: string;
  isVerified: boolean;
  testId: number;
}

interface CreateQuestionArgs {
  data: CreateQuestionValues;
  headers: RequestHeaders;
}

interface UpdateQuestionValues extends CreateQuestionValues {
  id: number;
}

interface UpdateQuestionArgs {
  data: UpdateQuestionValues;
  headers: RequestHeaders;
}

interface DeleteQuestionArgs {
  id: number;
  headers: RequestHeaders;
}

interface IQuestionsModule {
  findManySearch: (args: FindManyQuestionSearchArgs) => Promise<Question[]>;
  findMany: (args?: FindManyQuestionArgs) => Promise<Question[]>;
  createOne: (args: CreateQuestionArgs) => Promise<Question>;
  updateOne: (args: UpdateQuestionArgs) => Promise<Question>;
  deleteOne: (args: DeleteQuestionArgs) => Promise<Question>;
}

export type {
  CreateQuestionArgs,
  CreateQuestionValues,
  DeleteQuestionArgs,
  FindManyQuestionArgs,
  FindManyQuestionSearchArgs,
  IQuestionsModule,
  UpdateQuestionArgs,
  UpdateQuestionValues,
};
