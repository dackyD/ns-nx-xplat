import { IEnvironment } from '@nuvious/xplat/core';
import { deepMerge } from '@nuvious/xplat/utils';
import { environmentBase } from './environment.base';
1
export const environmentQa = deepMerge(environmentBase, <IEnvironment>{
  production: false,
  environmentName: 'qa'
  // customizations here...
});
