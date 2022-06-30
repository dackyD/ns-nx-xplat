import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nuvious/xplat/web/features';

@Component({
  selector: 'nuvious-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
