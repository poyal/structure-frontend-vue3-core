import type {ClassConstructor} from 'class-transformer';
import {instanceToPlain, plainToInstance} from 'class-transformer';

import {Injectable} from '@/core/decorator';

@Injectable()
export default class Mapper {
  toObject<T>(type: ClassConstructor<T>, source: T): T {
    return plainToInstance(type, source, {excludeExtraneousValues: true, exposeDefaultValues: true});
  }

  toArray<T>(type: ClassConstructor<T>, source: T[]): T[] {
    return plainToInstance(type, source, {excludeExtraneousValues: true, exposeDefaultValues: true});
  }

  toPlain<T>(source: T): Record<string, any> {
    return instanceToPlain(source);
  }
}
