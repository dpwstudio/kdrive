import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';
import 'jquery-nice-select';

declare var $: any;

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  date: Date;
  options: DatepickerOptions = {
    locale: frLocale,
    minYear: 2000,
    maxYear: 2020,
    dayNamesFormat: 'dd',
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'DD/MM/YYYY',
    useEmptyBarTitle: false,
    placeholder: 'Quand ?',
    addStyle: {
      'width': '100%'
    }
  };
  constructor() {
  }

  ngOnInit() {
     //------- Niceselect  js --------//  
     if (document.getElementById("default-select")) {
      $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
      $('select').niceSelect();
    };
  }

}
