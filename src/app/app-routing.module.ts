import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

const routes: Routes = [
  { path: '', component: FormTemplateComponent },
  { path: 'reactiveform', component: FormReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
