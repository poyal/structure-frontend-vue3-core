import 'reflect-metadata';

export function Column(name: string) {
  return (target: any, propertyKey: string) => {
    Reflect.metadata('$column', name)(target, propertyKey);
  };
}
