import {ValidationError} from 'class-validator';

export class ValidateError extends Error {
  errors: ValidationError[] = [];
  date: Date = new Date();

  constructor(errors: ValidationError[]) {
    super('VALIDATE_ERRORS');
    this.errors = errors;
    this.date = new Date();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidateError);
    }
  }
}
