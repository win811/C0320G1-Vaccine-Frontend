import {Component, enableProdMode, OnInit} from '@angular/core';
import {Contact} from '../../shared/models/Contact';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../shared/services/contact.service';
import {NotificationService} from '../../shared/services/notification.service';
import {NotifiByDucService} from '../../shared/services/notifi-by-duc.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  title = 'toaster-not';
  contactForm = this.fb.group({
    // tslint:disable-next-line:max-line-length
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]*$/)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)]],
    subject: ['', [Validators.required]],
    text: ['', [Validators.required]],
    id: ['']
  });
  message: string;
  classMessage: string;

  constructor(
    private contactService: ContactService,
    private notifyService: NotificationService,
    private noti: NotifiByDucService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  saveContact() {
    this.contact = this.contactForm.value;
    this.contactService.addNewContact(this.contact).subscribe(data => {
      console.log(data);
      // this.message = data.message;
      // this.classMessage = 'alert alert-success';
      this.noti.showNotification('success', 'Thông Báo', data.message);
    }, error => {
      this.noti.showNotification('danger', 'Thông Báo', error.message);
    });
  }



}
