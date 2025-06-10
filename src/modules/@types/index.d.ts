import type {SharedFilter} from '@/app/shared/filter/shared.filter';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: SharedFilter;
  }
}
