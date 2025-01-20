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
  RequestHeaders,
  SortingOptions,
  Subject,
};
