import { Component ,OnInit} from '@angular/core';
import { MsalService } from '@azure/msal-angular';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'template';
  isIframe = false;
  loginDisplay=false;
  constructor(private authService:MsalService){}
  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
  }

 login() {
    this.authService.loginRedirect();
  }
setLoginDisplay() {
  this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
}
}
