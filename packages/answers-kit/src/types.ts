interface Course {
  id: number;
  number: number;
}

interface Faculty {
  id: number;
  name: string;
  brief: string;
  universityId: number;
}

interface Subject {
  id: number;
  name: string;
  brief: string;
  facultyId: number;
}

interface Ping {
  message: string;
}

interface Test {
  id: number;
  createdAt: string;
  updatedAt: string;
  year: number;
  isVerified: boolean;
  subjectId: number;
  courseId: number;
}

interface Question {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  answer: string;
  isVerified: boolean;
  testId: number;
}

interface RequestHeaders {
  authorization: string;
}

type Order = 'asc' | 'desc';
type BaseSort = 'id' | 'name';

interface SortingOptions<T extends string = BaseSort> {
  order?: Order;
  sortBy?: BaseSort | T;
}

export type {
  BaseSort,
  Course,
  Faculty,
  Order,
  Ping,
  Question,
  RequestHeaders,
  SortingOptions,
  Subject,
  Test,
};
