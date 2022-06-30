import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@nuvious/xplat/core';
import { AppService } from '@nuvious/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
