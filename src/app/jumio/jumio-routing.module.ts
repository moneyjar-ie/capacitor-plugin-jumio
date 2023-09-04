import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JumioPage } from './jumio.page';

const routes: Routes = [
  {
    path: '',
    component: JumioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumioPageRoutingModule {
}
