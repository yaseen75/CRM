import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MsalGuard } from '@azure/msal-angular';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import(`./all-modules/all-modules.module`).then(
        (m) => m.AllModulesModule
      ),
  },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'error-500', component: Error500Component },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
  
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
