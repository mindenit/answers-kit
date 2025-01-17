interface Course {
  id: number;
  number: number;
}

interface RequestHeaders {
  authorization: string;
}

export type { Course, RequestHeaders };
