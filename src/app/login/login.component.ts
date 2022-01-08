import { Component, OnInit,OnDestroy  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { filter, takeUntil } from 'rxjs/operators';
import { EventMessage,EventType,InteractionStatus } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { LoginService } from '../Auth/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'msal-angular-tutorial';
  isIframe = false;
  loginDisplay = false;
  broadcastService: any;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private _login:LoginService,
  ) {}

  ngOnInit() {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });

    this.isIframe = window !== window.parent && !window.opener;
    this.broadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });
  }

  login() {
    this.authService.loginRedirect();
  
   
   
    console.log('hhhhh');
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
  // login = new FormGroup({
  //   userName: new FormControl(),
  //   password: new FormControl(),
  // });

  //constructor(private _loginService: LoginService) { }

  // username: any;
  // validuser: any

  // ngOnInit(): void {
  //   this.username = sessionStorage.getItem('_username');

  // }

  // Submit() {
  //   {
  //     sessionStorage.setItem('_username', this.login.value.userName);
  //     this.validuser = this._loginService.validuser(this.login.value);

  //   }
  // }
}
