import {ValidationError} from 'class-validator';

import {Injectable} from '@/core/decorator';
import {VALIDATE_CONFIG, ValidateEnum} from '@/core/config/validate.config';

@Injectable()
export class ValidateService {
  private validateConfig: ValidateEnum[] = VALIDATE_CONFIG;

  setDescriptions(descriptions: any[]): string {
    let returnValue: string = '';

    descriptions.forEach((description: string, index: number) => {
      if (index === 0) {
        returnValue = description;
      } else {
        returnValue = returnValue + '-' + description;
      }
    });

    return returnValue;
  }

  orderByConstraints(constraints: string[]): string[] {
    const returnValue: string[] = [];

    this.validateConfig.forEach((order: ValidateEnum) => {
      if (constraints.indexOf(order) >= 0) {
        returnValue.push(order);
      }
    });

    return returnValue;
  }

  setErrorMessages(errors: ValidationError[], messages: string[] = [], parentDescription?: any[]): string[] {
    errors.forEach((error: ValidationError) => {
      let description: string = '';
      const constraints: string[] = this.orderByConstraints(Object.keys((error.constraints as object) ?? {}));

      if (!!error.target) {
        description = Reflect.getMetadata('$description', error.target, error.property);
      }

      const descriptions: any = !!parentDescription ? Object.assign([], parentDescription) : [];
      if (!!description) {
        if (!!descriptions) {
          descriptions.push(description);
        }
      }

      if (constraints?.length > 0) {
        messages.push(
          `${this.setDescriptions(descriptions)}: ${!!error.constraints ? error.constraints[constraints[0]] : ''}`
        );
      }

      if (!!error.children && error.children.length > 0) {
        messages = this.setErrorMessages(error.children, messages, descriptions);
      }
    });

    return messages;
  }
}
