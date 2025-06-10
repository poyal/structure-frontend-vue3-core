import {Injectable} from '@/core/decorator';

@Injectable()
export default class LocalStorageService {
  resetLocalStorage() {
    localStorage.removeItem('SAMPLE_STORAGE');
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }
}
