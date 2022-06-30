import { Component } from '@angular/core';
import { AppService } from '@nuvious/xplat/nativescript/core';
import { AppBaseComponent } from '@nuvious/xplat/nativescript/features';

@Component({
  selector: 'nuvious-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
