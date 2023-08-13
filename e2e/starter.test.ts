import {by, device, element, expect} from 'detox';
import {beforeAll, beforeEach, describe, it} from '@jest/globals';
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should check initial message', async () => {
    await expect(element(by.id('init-services-message'))).toBeVisible();
  });
});
