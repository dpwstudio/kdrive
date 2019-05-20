import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
import 'jquery-nice-select';

declare var $: any;

@Component({
  selector: 'app-resa-form',
  templateUrl: './resa-form.component.html',
  styleUrls: ['./resa-form.component.scss']
})
export class ResaFormComponent implements OnInit {
  resaForm: FormGroup;
  resa = {
    name: '',
    email: '',
    phone: '',
    date: '',
    hour: '',
    description: ''
  };
  date: Date;
  options: DatepickerOptions = {
    locale: frLocale,
    minYear: 2000,
    maxYear: 2020,
    dayNamesFormat: 'dd',
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'DD/MM/YYYY',
    barTitleIfEmpty: 'Sélectionner une date',
    placeholder: 'Quand ?',
    addStyle: {
      'width': '100%'
    }
  };

  cities = ['Paris', 'La Défense', 'Roissy', 'Orly'];

  constructor() { }

  ngOnInit() {
    //------- Niceselect  js --------//  
    if (document.getElementById("default-select")) {
      $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
      $('select').niceSelect();
    };

    this.resaForm = new FormGroup({
      'name': new FormControl(this.resa.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'email': new FormControl(this.resa.email, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      'phone': new FormControl(this.resa.phone, [
        Validators.required,
      ]),
      'date': new FormControl(this.resa.date, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'hour': new FormControl(this.resa.hour, [
        Validators.required,
      ]),
      'description': new FormControl(this.resa.description, [
        Validators.required,
      ]),
    });
  }

}
