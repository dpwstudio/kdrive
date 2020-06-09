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
import { NotifierService } from "angular-notifier";
import { Router } from "@angular/router";

@Component({
  selector: "app-resa-form",
  templateUrl: "./resa-form.component.html",
  styleUrls: ["./resa-form.component.scss"],
})
export class ResaFormComponent implements OnInit {
  private notifier: NotifierService;
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
      fontSize: "13px",
    },
  };
  endpoint: string = "http://localhost:8888/createOrder.php";
  showMsg: boolean;
  showDanger: boolean;
  cities: any;
  loading = false;

  constructor(
    private http: HttpClient,
    notifierService: NotifierService,
    private router: Router
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
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
    this.loading = true;

    // stop here if form is invalid
    if (this.resaForm.invalid) {
      this.notifier.notify(
        "error",
        "Attention ! Veuillez compléter tous les champs."
      );
      this.loading = false;
      return;
    } else {
      setTimeout(() => {
        this.sendMail(JSON.stringify(this.resaForm.value));
        this.notifier.notify(
          "success",
          "En route ! Votre demande a bien été prise en compte."
        );
        this.loading = false;
        this.resaForm.reset();
      }, 1500);
    }
  }

  sendMail(email: any) {
    if (this.resaForm.valid) {
      this.http
        .post(this.endpoint, email)
        .subscribe((res) => console.log("res", res));
    }
  }
}
