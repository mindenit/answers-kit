export class AnswersError extends Error {
  status: number;

  constructor(message: string = 'Something went wrong', status: number = 500) {
    super(`AnswersError: ${status} ${message}`);

    this.name = 'AnswersError';
    this.message = message;
    this.status = status;
  }
}
