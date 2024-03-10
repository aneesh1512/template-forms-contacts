import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, addressTypeValues, phoneTypeValues } from '../contacts/contact.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../contacts/contacts.service';
import { CustomNotesValidator } from './custom-notes-validator';
import { DateValueAccessorDirective } from './custom-value-accessor.directive';
import { ProfilePicSelectorComponent } from '../profile-pic-selector/profile-pic-selector.component';

@Component({
  imports: [CommonModule, FormsModule, CustomNotesValidator, DateValueAccessorDirective, ProfilePicSelectorComponent],
  standalone: true,
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private contactsService: ContactsService,
    private router: Router) { }

  phonetypes = phoneTypeValues
  addressTypes = addressTypeValues

  contact: Contact = {
    id: "",
    firstName: "",
    lastName: "",
    icon: '',
    dateOfBirth: null,
    favoritesRanking: null,
    notes: "",
    phone: [{
      phoneNumber: "",
      phoneType: ""
    }],
    address: {
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      addressType: "",
    }
  }




  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return
    this.contactsService.getContact(contactId).subscribe((val) => {
      if (val) {
        this.contact = val
      }
    });
  }

  saveContact(form: NgForm) {
    console.log(form.value);
    //console.log(this.contact.phone.phoneType)
    console.log(this.contact);
    this.contactsService.saveContact(this.contact).subscribe(() => this.router.navigate(['/contacts']));
  }

  addPhone() {
    this.contact.phone.push({
      phoneNumber: "",
      phoneType: "",
    })
  }
}
