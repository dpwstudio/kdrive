import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NotifierService } from "angular-notifier";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  private notifier: NotifierService;
  contactForm: FormGroup;
  contact = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  endpoint: string = "http://localhost:8888/contactMail.php";

  constructor(
    private http: HttpClient,
    notifierService: NotifierService,
    private router: Router
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.contact.email, [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ]),
      subject: new FormControl(this.contact.subject, [
        Validators.required,
        Validators.minLength(4),
      ]),
      message: new FormControl(this.contact.message, [Validators.required]),
    });
  }

  sendMessage() {
    console.log("this.contactForm", this.contactForm.value);
    if (this.contactForm.invalid) {
      this.notifier.notify(
        "error",
        "Attention ! Veuillez compléter tous les champs."
      );
      return;
    } else {
      this.sendMail(JSON.stringify(this.contactForm.value));
      this.notifier.notify(
        "success",
        "C'est parti ! Votre message a bien été envoyé."
      );
      this.contactForm.reset();
    }
  }

  sendMail(email: any) {
    if (this.contactForm.valid) {
      this.http
        .post(this.endpoint, email)
        .subscribe((res) => console.log("res", res));
    }
  }
}
