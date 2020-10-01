import {Component, OnInit} from '@angular/core';
import {Contact} from '../../shared/models/Contact';
import {ContactReply} from '../../shared/models/ContactReply';
import {ContactReplyService} from '../../shared/services/contact-reply.service';
import {ContactService} from '../../shared/services/contact.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Account} from '../../shared/models/Account';

@Component({
  selector: 'app-contact-reply',
  templateUrl: './contact-reply.component.html',
  styleUrls: ['./contact-reply.component.css']
})
export class ContactReplyComponent implements OnInit {
  contact: Contact;
  contactReplys: ContactReply[];
  contactReply: ContactReply = {account: {id: 0}} as ContactReply;
  textReply = '';
  fileDinhKem: string;
  idContact = '';
  private sub: Subscription;

  constructor(
    private contactReplyService: ContactReplyService,
    private contactService: ContactService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.sub = this.router.params.subscribe(param => this.idContact = param.id);
    this.getContactAndReply();
  }

  getContactAndReply() {
    this.contactService.getContactById(this.idContact).subscribe(data => {
      this.contact = data.body;
      console.log(this.contact);
    });
  }

  SendReply() {
    if (this.textReply === undefined) {
      console.log('Phản hồi không được để rỗng');
    } else {
      this.contactReply.replyText = this.textReply;
      this.contactReply.replyFile = this.fileDinhKem;
      this.contactReply.account.id = 1;
      console.log(this.contactReply);
      this.contactReplyService.addNewContactReply(this.contactReply, this.idContact).subscribe(data => {
        console.log('Gửi ContactReply thành Công');
        this.textReply = '';
        this.getContactAndReply();
      }, error1 => {
        console.log('gửi reply thất bại');
      });
    }
  }

  endReply() {
    console.log('endreply');
  }
}
