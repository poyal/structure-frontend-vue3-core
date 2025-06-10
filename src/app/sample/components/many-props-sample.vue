<script lang="ts" setup>
import {SampleEnum} from '@/app/sample/model/sample.enum';

export interface Props {
  /**
   * 기본 문구 메시지
   */
  msg: string;

  /**
   * 사용자가 선택한 숫자<br>
   * 액션에 따라 증감함
   **/
  count: number;

  /**
   * 선택 타입
   **/
  types: 'type1' | 'type2' | 'type3';

  /**
   * 샘플 이넘
   **/
  sampleEnum?: SampleEnum;
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'sample',
  count: 3,
  types: 'type1',
  sampleEnum: SampleEnum.TYPE1
});
</script>

<template>
  <h1>msg: {{ props.msg }}</h1>
  <h1>count: {{ props.count }}</h1>
  <h1>types: {{ props.types }}</h1>
  <h1>sampleEnum: {{ props.sampleEnum }}</h1>
</template>
