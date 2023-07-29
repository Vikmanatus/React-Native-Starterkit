import Service from './Service';
import AppService from './app/AppService';
import UserService from './user/UserService';

interface ServiceClassesInterface {
  [key: string]: typeof Service;
}

interface ServicesTypes {
  appService: AppService;
  user: UserService;
}

interface ServiceInterface {
  [key: string]: Service;
}

export enum SERVICES {
  app = 'appService',
  user = 'userService',
}
class ServicesManager {
  static _instance?: ServicesManager | null = null;
  private readonly serviceClasses: ServiceClassesInterface;
  private readonly services: ServiceInterface;

  constructor() {
    this.serviceClasses = {
      [SERVICES.user]: UserService,
      [SERVICES.app]: AppService,
    };
    this.services = {};
  }
  static getInstance() {
    if (!ServicesManager._instance) {
      ServicesManager._instance = new ServicesManager();
    }
    return ServicesManager._instance;
  }
  /**
   * Function to access business services
   * @param {SERVICES[]} array of desired services
   * @return {Object} object containing all requested business services
   */
  getServices(...services: SERVICES[]): ServicesTypes {
    return Object.values(services).reduce((acc, serviceName: string) => {
      const service = this.getService(serviceName);
      if (service) {
        // @ts-ignore
        acc[serviceName] = service;
      }

      return acc;
    }, {} as ServicesTypes);
  }
  /**
   * Function to access a single service
   * @param {string} service name desired
   * @return {Service | null} service required or `null` if invalid service name
   */
  getService(key: string) {
    let instance = this.services[key];
    if (instance) {
      return instance;
    }

    if (key in this.serviceClasses) {
      instance = new this.serviceClasses[key](this);
      this.services[key] = instance;
      return instance;
    }

    return null;
  }
  /**
   * Function to initialize a specific business service
   * @param {string} serviceName service name to initialize
   */
  initService(serviceName: string): Promise<boolean> | boolean {
    const service = this.getService(serviceName);

    if (!service) {
      return false;
    }
    const promise = service.init();
    return promise;
  }

  /**
   * Function to initialize all business services
   * @returns a void promise when initialization is done
   */
  init() {
    const promises = [];

    for (const serviceName in this.serviceClasses) {
      const service = this.initService(serviceName);
      if (service !== false) {
        promises.push(service);
      }
    }
    return Promise.all(promises).then(results => {
      console.log({results});
    });
  }
}

ServicesManager._instance = null;

export default ServicesManager;
