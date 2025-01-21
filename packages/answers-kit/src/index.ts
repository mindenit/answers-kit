import { CoursesModule } from './modules/courses/index.js';
import type { ICoursesModule } from './modules/courses/types.js';
import { FacultiesModule } from './modules/faculties/index.js';
import type { IFacultiesModule } from './modules/faculties/types.js';
import { SubjectsModule } from './modules/subjects/index.js';
import type { ISubjectModule } from './modules/subjects/types.js';
import { TestsModule } from './modules/tests/index.js';
import type { ITestsModule } from './modules/tests/types.js';

interface AnswersKitConfig {
  apiUrl: string;
}

export class AnswersKit {
  private readonly apiUrl: string;
  readonly courses: ICoursesModule;
  readonly faculties: IFacultiesModule;
  readonly subjects: ISubjectModule;
  readonly tests: ITestsModule;

  constructor(config?: AnswersKitConfig) {
    if (config && config.apiUrl.endsWith('/')) {
      throw new SyntaxError('`apiUrl` cannot end with slash');
    }

    this.apiUrl = config?.apiUrl
      ? config.apiUrl
      : 'https://answers.mindenit.org/api';

    this.courses = new CoursesModule(this.apiUrl);
    this.faculties = new FacultiesModule(this.apiUrl);
    this.subjects = new SubjectsModule(this.apiUrl);
    this.tests = new TestsModule(this.apiUrl);
  }
}
