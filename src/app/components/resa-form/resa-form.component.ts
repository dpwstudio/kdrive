import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { DatepickerOptions } from "ng2-datepicker";
import * as enLocale from "date-fns/locale/en";
import * as frLocale from "date-fns/locale/fr";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-resa-form",
  templateUrl: "./resa-form.component.html",
  styleUrls: ["./resa-form.component.scss"],
})
export class ResaFormComponent implements OnInit {
  resaForm: FormGroup;
  resa = {
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    hour: "",
    description: "",
  };
  date: Date;
  options: DatepickerOptions = {
    locale: frLocale,
    minYear: 2000,
    maxYear: 2020,
    dayNamesFormat: "dd",
    displayFormat: "DD/MM/YYYY",
    barTitleFormat: "DD/MM/YYYY",
    barTitleIfEmpty: "Sélectionner une date",
    placeholder: "Quand ?",
    addStyle: {
      width: "100%",
      color: "#000",
      fontSize: "13px"
    },
  };
  endpoint: string = "http://localhost:4200/sendmail.php";
  showMsg: boolean;
  showDanger: boolean;
  cities: any;
  selectedValue: string;
  selectedValueTo: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.selectedValue = "D'où partez-vous ?";
    this.selectedValueTo = "Où allez-vous ?";

    this.cities = ["Paris", "La Défense", "Roissy", "Orly"];

    this.resaForm = new FormGroup({
      name: new FormControl(this.resa.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.resa.email, [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ]),
      phone: new FormControl(this.resa.phone, [Validators.required]),
      from: new FormControl(this.resa.from, [Validators.required]),
      to: new FormControl(this.resa.to, [Validators.required]),
      date: new FormControl(this.resa.date, [
        Validators.required,
        Validators.minLength(4),
      ]),
      hour: new FormControl(this.resa.hour, [Validators.required]),
      description: new FormControl(this.resa.description, [
        Validators.required,
      ]),
    });
  }

  onChangeFrom(event) {
    this.resaForm.value.from = event.target.value;
  }

  onChangeTo(event) {
    this.resaForm.value.to = event.target.value;
  }

  onSubmit() {
    console.log("Your form data : ", this.resaForm.value);
    if (this.resaForm.value.email) {
      this.sendMail(JSON.stringify(this.resaForm.value));
      this.showMsg = true;
      this.resaForm.reset();
      console.log('this.date', this.resaForm.value.date);
    } else {
      this.showDanger = true;
    }
  }

  sendMail(email: any) {
    if (this.resaForm.valid) {
      this.http.post(this.endpoint, email);
    }
  }
}
