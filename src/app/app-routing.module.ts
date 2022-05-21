import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrudTableExamplesComponent} from "./pages/crud-table-examples/crud-table-examples.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/crud-table-examples',
    pathMatch: 'full'
  },
  {
    path: 'crud-table-examples',
    component: CrudTableExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
