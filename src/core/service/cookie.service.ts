import Cookies from 'js-cookie';

import {Injectable} from '@/core/decorator';

@Injectable()
export default class CookieService {
  resetCookie() {
    Cookies.remove('SAMPLE_STORAGE');
  }

  removeCookie(name: string) {
    Cookies.remove(name);
  }

  setCookie(name: string, value: string, options: Cookies.CookieAttributes = {}) {
    Cookies.set(name, value, options);
  }

  getCookie(name: string): string | undefined {
    return Cookies.get(name);
  }
}
