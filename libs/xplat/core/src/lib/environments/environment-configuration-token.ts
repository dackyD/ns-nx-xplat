import { InjectionToken } from '@angular/core';
import { IEnvironment } from './environment.interface';

export const ENVIRONMENT_CONFIGURATION_TOKEN = new InjectionToken<IEnvironment>(
  'ENVIRONMENT_CONFIGURATION_TOKEN'
);
