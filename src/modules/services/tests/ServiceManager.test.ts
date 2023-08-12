import {beforeEach, describe, expect, it} from '@jest/globals';
import ServicesManager, {SERVICES} from '../ServicesManager';
import UserService from '../user/UserService';
import AppService from '../app/AppService';

describe('ServicesManager', () => {
  let servicesManager: ServicesManager;

  beforeEach(() => {
    servicesManager = ServicesManager.getInstance();
  });

  it('should provide a singleton instance', () => {
    const instance1 = ServicesManager.getInstance();
    const instance2 = ServicesManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should retrieve a service correctly', () => {
    const userService = servicesManager.getService(SERVICES.user);
    expect(userService).toBeInstanceOf(UserService);

    const appService = servicesManager.getService(SERVICES.app);
    expect(appService).toBeInstanceOf(AppService);
  });

  it('should retrieve some services', () => {
    const services = servicesManager.getServices(
      ...[SERVICES.app, SERVICES.user],
    );
    const mockedResponse = {
      [SERVICES.app]: new AppService(servicesManager),
      [SERVICES.user]: new UserService(servicesManager),
    };
    expect(services).toStrictEqual(mockedResponse);
  });
});
