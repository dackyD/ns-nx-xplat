// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { environment } from '@nuvious/xplat/core';
import { ENVIRONMENT_CONFIGURATION_TOKEN } from '@nuvious/xplat/core';

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: ENVIRONMENT_CONFIGURATION_TOKEN,
      useValue: environment,
    },
  ],
})
export class AppModule {}
