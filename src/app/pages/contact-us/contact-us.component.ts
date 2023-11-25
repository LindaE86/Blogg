import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  submitForm(event: Event) {
    event.preventDefault();
    const formValues = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLInputElement).value
    };

    (document.getElementById('name') as HTMLInputElement).value = "";
    (document.getElementById('email') as HTMLInputElement).value = "";
    (document.getElementById('message') as HTMLInputElement).value = "";


    console.log('Formulärvärden:', formValues);
  }
}

