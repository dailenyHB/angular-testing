import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  text = 'contact page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };

  submitted = false;

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
          Validators.required,
          Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'text': new FormControl(this.contact.text, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
