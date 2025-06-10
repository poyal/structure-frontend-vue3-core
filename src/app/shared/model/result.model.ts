import {Attribute, Reference} from '@/core/decorator';

import {ResultEnum} from '@/app/shared/enum/result.enum';

export class ResultModel {
  @Attribute('action')
  @Reference(() => ResultEnum)
  action!: ResultEnum | null;

  @Attribute('data')
  data!: any | null;
}
