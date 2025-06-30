import {EnumAbstract, Enumerable} from '@/core/enum';

@Enumerable
export class SampleEnum extends EnumAbstract {
  static readonly TYPE1: SampleEnum = new SampleEnum('타입1');
  static readonly TYPE2: SampleEnum = new SampleEnum('타입2');
  static readonly TYPE3: SampleEnum = new SampleEnum('타입3');
  static readonly TYPE4: SampleEnum = new SampleEnum('타입4');

  private constructor(description: string) {
    super(description);
  }
}
