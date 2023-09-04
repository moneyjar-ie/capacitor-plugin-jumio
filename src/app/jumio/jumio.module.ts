import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JumioPageRoutingModule } from './jumio-routing.module';

import { JumioPage } from './jumio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JumioPageRoutingModule
  ],
  declarations: [JumioPage]
})
export class JumioPageModule {
}
