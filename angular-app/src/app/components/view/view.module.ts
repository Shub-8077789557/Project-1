import { NgModule, ModuleWithProviders } from '@angular/core';

import { FroalaViewDirective } from './view.directive';

@NgModule({
  declarations: [FroalaViewDirective],
  exports: [FroalaViewDirective]
})
export class ViewModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: ViewModule, providers: []};
  }
}
