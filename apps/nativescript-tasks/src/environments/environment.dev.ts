import { environmentBase } from './environment.base';
import { IEnvironment } from '@nuvious/xplat/core';
import { environmentDev } from '@nuvious/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentDev, {
  // app level customizations here...
});
