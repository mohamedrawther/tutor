import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FileNotFoundComponent} from './error/file-not-found/file-not-found.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'error-fnf', component: FileNotFoundComponent}];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
