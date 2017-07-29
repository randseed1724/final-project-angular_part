import { Component, OnInit } from '@angular/core';
import usersList from '../../../models/users';
import { SessionService } from '../../../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};
  user: Object[] = [
    { id: 25, name: 'Alejandro', username: 'sevilayha' },
    { id: 26, name: 'Nick', username: 'whatnicktweets' },
    { id: 27, name: 'Holly', username: 'hollylawly' }
  ];

  constructor(
    private sessionThang: SessionService,
  ) { }

  ngOnInit() {
    this.contacts = usersList;
  }

  addContact(name: HTMLInputElement, email: HTMLInputElement , phone: HTMLInputElement, image: HTMLInputElement){
    console.log("Add contact has been called");
    this.newContact = {
     name: name.value,
     email: email.value,
     phone: phone.value,
     image: image.value
      };
     this.contacts.push(this.newContact);

      name.value = ' empt' ;
      email.value = ' empt';
      phone.value = 'empt ';
      image.value = 'empt ';
      return false;
  }
}
