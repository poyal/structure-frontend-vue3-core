import {ValidationError, Validator} from 'class-validator';

import Container from '@/core/container';
import {ValidateService} from '@/core/service/validate.service';
import {EventBusService} from '@/core/service/event-bus.service';
import {ValidateError} from '@/core/decorator/error/validate.error';

const service: ValidateService = Container.resolve(ValidateService);
const eventBus: EventBusService = Container.resolve(EventBusService);

function validate(...args: any[]): ValidationError[] {
  const validator: Validator = new Validator();
  const errors: ValidationError[] = [];

  args.forEach((arg: any) => {
    errors.push(...validator.validateSync(arg));
  });

  return errors;
}

export function isValidate(...args: any[]): boolean {
  return validate(...args)?.length === 0;
}

export function getValidate(...args: any[]): ValidationError[] {
  return validate(...args);
}

export function throwValidateError(errors: ValidationError[]): ValidateError | undefined {
  eventBus.sample(service.setErrorMessages(errors));
  return !!errors && errors.length > 0 ? new ValidateError(errors) : undefined;
}
