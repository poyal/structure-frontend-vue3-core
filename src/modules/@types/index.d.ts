import type {SharedFilter} from '@/app/shared/filter/shared.filter';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: SharedFilter;
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    options?: {
      authenticate?: boolean;
      authorization?: boolean;
      spinner?: boolean | Enum.CORE.SPINNER_TYPE;
    };
  }
}

declare module 'class-transformer' {
  export interface ClassTransformOptions {
    options?: {
      toClass?: boolean;
      toPlain?: boolean;
      toCopy?: boolean;
    };
  }
}
