import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import {PipesModule} from "../../pipes/pipes.module";
import {SearchPipe} from "../../pipes/search/search";
import {SortPipe} from "../../pipes/sort/sort";

@NgModule({
  declarations: [
    SearchPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),

  ],
})
export class SearchPageModule {}
