import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' }
    ])
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
