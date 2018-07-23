import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
@NgModule({
	declarations: [SearchPipe,
    SortPipe,
    SortPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe,
    SortPipe]
})
export class PipesModule {


}
