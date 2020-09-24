import {ContactReply} from './ContactReply';

export interface Contact {
  id: number;
  fullName: string;
  email: string;
  subject: string;
  text: string;
  contactReply?: ContactReply;
}
