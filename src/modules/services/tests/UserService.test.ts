import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import UserService from '../user/UserService';
import ServicesManager from '../ServicesManager';

jest.mock('../../../utils');

describe('UserService', () => {
  let userService: UserService;
  let servicesManager: ServicesManager;

  beforeEach(() => {
    servicesManager = new ServicesManager();
    userService = new UserService(servicesManager);
  });
  it('should initialize UserService correctly', async () => {
    const result = await userService.init();
    expect(result).toBe(true);
  });
});
