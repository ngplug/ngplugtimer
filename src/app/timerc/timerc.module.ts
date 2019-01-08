import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimercComponent } from '../timerc/timerc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimercComponent],
  exports: [TimercComponent]
})
export class TimercModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TimercModule,
      providers: []
    }
  }
}
