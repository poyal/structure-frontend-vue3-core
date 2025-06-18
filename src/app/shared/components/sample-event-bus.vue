<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue';

import {eventBus, type EventBusCallback} from '@/core/service/event-bus.handler.ts';

let eventBusHandler: EventBusCallback | null = null;

onMounted(() => {
  eventBusHandler = eventBus.subscribe('SAMPLE_EVENT_BUS', getEvent);
});

onUnmounted(() => {
  if (!!eventBusHandler) {
    eventBusHandler = eventBusHandler.unsubscribe();
  }
});

function getEvent(args: any) {
  const element: HTMLElement | null = document.querySelector('#SampleEventBus');
  if (!!element) {
    if (typeof args === 'string') {
      const div: HTMLDivElement = document.createElement('div');
      div.innerText = args;
      element.appendChild(div);
    } else {
      args.forEach((arg: any) => {
        const div: HTMLDivElement = document.createElement('div');
        div.innerText = arg;
        element.appendChild(div);
      });
    }
  }
}
</script>

<template>
  <div id="SampleEventBus"></div>
</template>
