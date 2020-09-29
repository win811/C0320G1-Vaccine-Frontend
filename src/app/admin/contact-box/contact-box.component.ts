import {Component, OnInit} from '@angular/core';
import {Contact} from '../../shared/models/Contact';
import {ContactService} from '../../shared/services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  message = '';

  constructor(private contactService: ContactService, private  router: Router) {
  }

  ngOnInit() {
    this.getAllContact();
  }

  readMail(id) {
    this.router.navigateByUrl('contactReply', id);
  }

  getAllContact() {
    this.contactService.getAllContact(0).subscribe(data => {
      this.contacts = data.body;
      console.log(data);
      this.message = 'Lấy dữ liệu thành công';
    }, error => {
      this.message = 'Lấy dữ liệu thất bại';
    });
  }

}
