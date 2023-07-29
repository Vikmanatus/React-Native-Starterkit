import ServicesManager from './ServicesManager';

class Service {
  protected manager: ServicesManager;
  constructor(manager: ServicesManager) {
    this.manager = manager;
  }

  /**
   * Function to initialize a business service
   */
  public init(): Promise<boolean> | boolean {
    return true;
  }
}

export default Service;
