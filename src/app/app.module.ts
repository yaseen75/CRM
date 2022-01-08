import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MsalModule ,MsalRedirectComponent,MsalGuard  } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  
};
@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
  ],
  imports: [
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          // clientId: '2c531bb3-6fc1-4ae2-8917-ccd24544c9b9',
          //  authority: 'api://2c531bb3-6fc1-4ae2-8917-ccd24544c9b9', // This is your tenant ID
          // authority: 'https://login.microsoftonline.com/common',
          // redirectUri: 'https://localhost:4200/admin', // This is your redirect URI
          // navigateToLoginRequestUrl: true,
          clientId: '2c531bb3-6fc1-4ae2-8917-ccd24544c9b9',
          // authority: 'https://login.microsoftonline.com/common',
          knownAuthorities: [],
          redirectUri: 'https://localhost:4200/user',
          postLogoutRedirectUri: 'https://localhost:4200/logout',
          navigateToLoginRequestUrl: true,
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE,
        },
      }),
      null,
      null
    ),

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    PerfectScrollbarModule,
    DataTablesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: [PERFECT_SCROLLBAR_CONFIG, MsalGuard],
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
