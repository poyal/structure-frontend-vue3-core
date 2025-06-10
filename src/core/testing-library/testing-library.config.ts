export const MOCK_RENDER = {
  global: {
    mocks: {
      $filters: {
        sampleFilter: (value: any) => {
          return value;
        }
      }
    },
    directives: {
      'safe-html': (value: any) => {
        return value;
      }
    }
  }
};
