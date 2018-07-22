import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtraDetailsPage } from './extra-details';

@NgModule({
  declarations: [
    ExtraDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtraDetailsPage),
  ],
})
export class ExtraDetailsPageModule {}
