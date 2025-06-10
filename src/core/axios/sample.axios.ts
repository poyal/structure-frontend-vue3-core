import {Injectable} from '@/core/decorator';
import {AxiosAbstract} from '@/core/axios/axios.abstract';

@Injectable()
export default class SampleAxios extends AxiosAbstract {
  constructor() {
    super(`${import.meta.env.VITE_SAMPLE_URL}`);
  }
}
