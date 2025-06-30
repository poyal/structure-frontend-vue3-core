import 'reflect-metadata';
import {Expose} from 'class-transformer';
import type {ExposeOptions} from 'class-transformer/types/interfaces';

import Container from '@/core/container.ts';
import {ReferenceService} from '@/core/service/reference.service.ts';

const referenceService: ReferenceService = Container.resolve(ReferenceService);

export function Attribute(description: string, exposeOptions?: ExposeOptions) {
  return (target: any, propertyKey: string) => {
    let options: ExposeOptions = {
      ...exposeOptions
    };

    const column: string | undefined = referenceService.getColumn(target, propertyKey);
    if (!!column) {
      options = {
        ...exposeOptions,
        name: column
      };
    }

    Expose(options)(target, propertyKey);
    Reflect.metadata('$description', description)(target, propertyKey);
  };
}
