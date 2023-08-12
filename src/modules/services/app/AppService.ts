import {sleep} from '../../../utils';
import Service from '../Service';

class AppService extends Service {
  public init(): Promise<boolean> {
    return sleep(9000)
      .then(() => {
        return true;
      })
      .catch(_err => {
        return false;
      });
  }
}
export default AppService;
