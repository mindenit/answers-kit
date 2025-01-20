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

export type { Course, Faculty, RequestHeaders, Subject };
