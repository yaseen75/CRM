import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    DataTablesModule
  ]
})
export class ContactsModule { }
