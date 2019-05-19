import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  constructor() { }

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
