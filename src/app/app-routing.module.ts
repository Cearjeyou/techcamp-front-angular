import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { DetailComponent } from './detail/detail.component';
import { ListSearchComponent } from './list-search/list-search.component';

const routes: Routes = [
  {path: "", component: ListItemsComponent},
  {path: "detail/:id", component: DetailComponent},
  {path: "items/:name", component: ListSearchComponent},
  {path: "items/:name/:specie", component: ListSearchComponent},
  {path: "spec/:specie", component: ListSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
