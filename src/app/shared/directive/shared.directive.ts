import type {App, DirectiveHook, DirectiveBinding} from 'vue';
import type {Config as DOMPurifyConfig} from 'dompurify';

import Container from '@/core/container';
import {XssService} from '@/core/service/xss.service';
import {XSS_CONFIG} from '@/core/config/xss.config';

const safeHtml: DirectiveHook = (element: HTMLElement, binding: DirectiveBinding) => {
  const xss: XssService = Container.resolve(XssService);
  let config: DOMPurifyConfig = XSS_CONFIG.DEFAULT;

  if (binding.modifiers?.full === true) {
    config = XSS_CONFIG.HTML;
  }

  element.innerHTML = xss.toSanitize(binding.value ?? '', config);
};

export function SetDirective(app: App<Element>) {
  app.directive('safe-html', {
    created: safeHtml,
    updated: safeHtml,
    unmounted: (element: HTMLElement) => {
      element.innerHTML = '';
    }
  });
}
