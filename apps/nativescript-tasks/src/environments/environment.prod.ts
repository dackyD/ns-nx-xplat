import { environmentBase } from './environment.base';
import { IEnvironment } from '@nuvious/xplat/core';
import { environmentProd } from '@nuvious/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});
