import { CoursesModule } from './modules/courses/index.js';
import type { ICoursesModule } from './modules/courses/types.js';
import { FacultiesModule } from './modules/faculties/index.js';
import type { IFacultiesModule } from './modules/faculties/types.js';
import { PingModule } from './modules/ping/index.js';
import type { IPingModule } from './modules/ping/types.js';
import { QuestionsModule } from './modules/questions/index.js';
import type { IQuestionsModule } from './modules/questions/types.js';
import { StatisticsModule } from './modules/statistics/index.js';
import type { IStatisticsModule } from './modules/statistics/types.js';
import { SubjectsModule } from './modules/subjects/index.js';
import type { ISubjectModule } from './modules/subjects/types.js';
import { TestsModule } from './modules/tests/index.js';
import type { ITestsModule } from './modules/tests/types.js';
import { UniversitiesModule } from './modules/universities/index.js';
import type { IUniversitiesModule } from './modules/universities/types.js';

interface AnswersKitConfig {
  apiUrl: string;
}

export class AnswersKit {
  private readonly apiUrl: string;
  readonly courses: ICoursesModule;
  readonly faculties: IFacultiesModule;
  readonly statistics: IStatisticsModule;
  readonly ping: IPingModule;
  readonly subjects: ISubjectModule;
  readonly tests: ITestsModule;
  readonly universities: IUniversitiesModule;
  readonly questions: IQuestionsModule;

  constructor(config?: AnswersKitConfig) {
    if (config && config.apiUrl.endsWith('/')) {
      throw new SyntaxError('`apiUrl` cannot end with slash');
    }

    this.apiUrl = config?.apiUrl
      ? config.apiUrl
      : 'https://answers.mindenit.org/api';

    this.courses = new CoursesModule(this.apiUrl);
    this.faculties = new FacultiesModule(this.apiUrl);
    this.statistics = new StatisticsModule(this.apiUrl);
    this.ping = new PingModule(this.apiUrl);
    this.subjects = new SubjectsModule(this.apiUrl);
    this.tests = new TestsModule(this.apiUrl);
    this.universities = new UniversitiesModule(this.apiUrl);
    this.questions = new QuestionsModule(this.apiUrl);
  }
}

export type {
  Course,
  Faculty,
  Order,
  Ping,
  Question,
  RequestHeaders,
  SortingOptions,
  Statistics,
  Subject,
  Test,
  TestData,
  TestMeta,
  TestResponse,
  University,
  BaseSort,
} from './types.js';
export type {
  CreateCourseValues,
  UpdateCourseValues,
} from './modules/courses/types.js';
export type {
  CreateFacultyValues,
  UpdateFacultyValues,
} from './modules/faculties/types.js';
export type {
  CreateQuestionValues,
  UpdateQuestionValues,
} from './modules/questions/types.js';
export type {
  CreateSubjectValues,
  UpdateSubjectValues,
} from './modules/subjects/types.js';
export type {
  CreateTestValues,
  CreateTestQuestionsValues,
  UpdateTestValues,
} from './modules/tests/types.js';
export type {
  CreateUniversityValues,
  UpdateUniversityValues,
} from './modules/universities/types.js';
export { AnswersError } from './error.js';
