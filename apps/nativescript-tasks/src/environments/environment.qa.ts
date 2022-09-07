import { environmentBase } from './environment.base';
import { IEnvironment } from '@nuvious/xplat/core';
import { environmentQa } from '@nuvious/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentQa, {
  // app level customizations here...
});
