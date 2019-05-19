import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      'subject': new FormControl(this.contact.subject, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'message': new FormControl(this.contact.message, [
        Validators.required,
      ]),
    });
  }

  sendMessage() {
    console.log('this.contactForm', this.contactForm.value);
  }

}
