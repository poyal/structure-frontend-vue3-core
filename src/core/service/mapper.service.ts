import type {ClassConstructor} from 'class-transformer';
import {instanceToPlain, plainToInstance} from 'class-transformer';

import {Injectable} from '@/core/decorator';

@Injectable()
export default class Mapper {
  toInstance<T, V>(type: ClassConstructor<T>, source: V): T {
    return plainToInstance(type, source, {
      excludeExtraneousValues: true,
      exposeDefaultValues: true,
      options: {toClass: true}
    });
  }

  toInstances<T, V>(type: ClassConstructor<T>, source: V[]): T[] {
    return plainToInstance(type, source, {
      excludeExtraneousValues: true,
      exposeDefaultValues: true,
      options: {toClass: true}
    });
  }

  toClass<T, V>(type: ClassConstructor<T>, source: V): T {
    return plainToInstance(type, source, {
      ignoreDecorators: true,
      excludeExtraneousValues: true,
      exposeDefaultValues: true,
      options: {toCopy: true}
    });
  }

  toClasses<T, V>(type: ClassConstructor<T>, source: V[]): T[] {
    return plainToInstance(type, source, {
      ignoreDecorators: true,
      excludeExtraneousValues: true,
      exposeDefaultValues: true,
      options: {toCopy: true}
    });
  }

  toPlain<T>(source: T): Record<string, any> {
    return instanceToPlain(source, {
      excludeExtraneousValues: true,
      exposeDefaultValues: true,
      options: {toPlain: true}
    });
  }
}
