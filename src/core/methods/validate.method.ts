import {ValidationError, Validator} from 'class-validator';

import Container from '@/core/container';
import {ValidateService} from '@/core/service/validate.service';
import {EventBusService} from '@/core/service/event-bus.service';

const service: ValidateService = Container.resolve(ValidateService);
const eventBus: EventBusService = Container.resolve(EventBusService);

export function Validate(...args: any[]) {
  const validator: Validator = new Validator();
  const errors: ValidationError[] = [];

  args.forEach((arg: any) => {
    errors.push(...validator.validateSync(arg));
  });

  if (errors?.length > 0) {
    // 오류 메시지 영역
    eventBus.sample(service.setErrorMessages(errors));
    return false;
  }

  return true;
}
