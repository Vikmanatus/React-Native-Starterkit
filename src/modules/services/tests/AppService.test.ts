import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import AppService from '../app/AppService';
import ServicesManager from '../ServicesManager';

jest.mock('../../../utils');

describe('UserService', () => {
  let appService: AppService;
  let servicesManager: ServicesManager;

  beforeEach(() => {
    servicesManager = new ServicesManager();
    appService = new AppService(servicesManager);
  });
  it('should initialize AppService correctly', async () => {
    const result = await appService.init();
    expect(result).toBe(true);
  });
});
