import { Component } from '@angular/core';

@Component({
  templateUrl: 'configuration.component.html'
})
export class Configuration {

  constructor() { }

  smtpCard: boolean = false;
  emailCard: boolean = true;
  configurationField: boolean = false;
  buttonLabel: string = "Modify";
  sendEmail() {
    this.smtpCard = true;
    this.emailCard = false;
  }

  enableForm() {
    this.configurationField = true;
    this.buttonLabel = "Save";
    (<HTMLInputElement>document.getElementById("button")).value = "Save";
  }

  disableForm() {
    this.configurationField = false;
  }

}
