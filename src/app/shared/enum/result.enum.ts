import {EnumAbstract, Enumerable} from '@/core/enum';

@Enumerable
export class ResultEnum extends EnumAbstract {
  static readonly ADD: ResultEnum = new ResultEnum('ADD');
  static readonly MODIFY: ResultEnum = new ResultEnum('MODIFY');
  static readonly DELETE: ResultEnum = new ResultEnum('DELETE');

  private constructor(description: string) {
    super(description);
  }
}
