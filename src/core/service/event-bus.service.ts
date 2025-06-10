import {eventBus} from '@/core/service/event-bus.handler';

export class EventBusService {
  sample(...args: any[]) {
    this.dispatch('EVENT_BUS_SAMPLE', ...args);
  }

  // CORE
  private dispatch(event: string, ...args: any[]) {
    if (`${import.meta.env.VITE_ENV}` !== 'VITEST') {
      eventBus.dispatch(event, ...args);
    }
  }
}
