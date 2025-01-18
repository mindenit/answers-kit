import { CoursesModule } from './modules/courses/index.js';
import type { ICoursesModule } from './modules/courses/types.js';
import { FacultiesModule } from './modules/faculties/index.js';
import type { IFacultiesModule } from './modules/faculties/types.js';

interface AnswersKitConfig {
  apiUrl: string;
}

export class AnswersKit {
  private readonly apiUrl: string;
  readonly courses: ICoursesModule;
  readonly faculties: IFacultiesModule;

  constructor(config?: AnswersKitConfig) {
    if (config && config.apiUrl.endsWith('/')) {
      throw new SyntaxError('`apiUrl` cannot end with slash');
    }

    this.apiUrl = config?.apiUrl
      ? config.apiUrl
      : 'https://answers.mindenit.org/api';

    this.courses = new CoursesModule(this.apiUrl);
    this.faculties = new FacultiesModule(this.apiUrl);
  }
}
