import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TasklistModule as SharedTasklistModule } from '@nuvious/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TASKLIST_COMPONENTS } from './components';

@NgModule({
  imports: [SharedTasklistModule, UIModule],
  declarations: [...TASKLIST_COMPONENTS],
  exports: [...TASKLIST_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TasklistModule {}
