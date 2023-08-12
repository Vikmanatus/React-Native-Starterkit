import {sleep} from '../../../utils';
import Service from '../Service';

class UserService extends Service {
  public init(): Promise<boolean> {
    return sleep(8000)
      .then(() => {
        return true;
      })
      .catch(_err => {
        return false;
      });
  }
}
export default UserService;
