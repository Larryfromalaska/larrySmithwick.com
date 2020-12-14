import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = new ContactForm();

  constructor() { }

  ngOnInit(): void {
  }

}
