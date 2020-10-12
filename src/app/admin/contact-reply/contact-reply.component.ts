import {Component, OnInit} from '@angular/core';
import {Contact} from '../../shared/models/Contact';
import {ContactReply} from '../../shared/models/ContactReply';
import {ContactReplyService} from '../../shared/services/contact-reply.service';
import {ContactService} from '../../shared/services/contact.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {NotifiByDucService} from '../../shared/services/notifi-by-duc.service';
import {TokenStorageService} from '../../shared/services/TokenStorageService';

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
  avatar;
  private sub: Subscription;

  constructor(
    private contactReplyService: ContactReplyService,
    private contactService: ContactService,
    private router: ActivatedRoute,
    private  router1: Router,
    private noti: NotifiByDucService,
    private  tokenStorageService: TokenStorageService
  ) {


  }

  ngOnInit() {
    this.sub = this.router.params.subscribe(param => this.idContact = param.id);
    this.getContactAndReply();
    this.avatar = this.tokenStorageService.getJwtResponse().avatar;
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
      this.noti.showNotification('info', 'Trạng Thái', 'Đang gửi phản hồi');
      this.contactReply.replyText = this.textReply;
      this.contactReply.replyFile = this.fileDinhKem;
      this.contactReply.account.id = Number(this.tokenStorageService.getJwtResponse().accountId);
      console.log(this.contactReply);
      this.contactReplyService.addNewContactReply(this.contactReply, this.idContact).subscribe(data => {
        this.noti.showNotification('success', 'Phản hồi', data.message);
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

  closeContact(id) {
    this.contactService.closeContact(id).subscribe(data => {
      console.log(close());
      this.noti.showNotification('success', 'Thông Báo', data.message);
      this.router1.navigate(['contactBox']);
    });
  }
}
