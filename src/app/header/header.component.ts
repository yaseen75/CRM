import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
	
export class HeaderComponent implements OnInit {
 
  ngOnInit() {
    // Small Sidebar

   
  }
}

 $(function () {
   $('#add_activity').modal({
     show: true,
   });
   $('#add_role').modal({
     show: false,
   });

   $('.closeModal').click(function () {
     $(this).closest('.modal').modal('hide');
   });
 });

 $(document).ready(function () {
   $('#dtDynamicVerticalScrollExample').DataTable({
     scrollY: '50vh',
     scrollX: true,
   });
   $('.dataTables_length').addClass('bs-select');
 });


