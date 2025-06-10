import type {App} from 'vue';

export interface SharedFilter {
  sampleFilter: (value: string) => string;
}

export function SetFilter(app: App<Element>) {
  app.config.globalProperties.$filters = {
    sampleFilter(value: string): string {
      return `FILTER_${value}`;
    }
  };
}
