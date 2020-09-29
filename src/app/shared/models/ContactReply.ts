import { Account } from './Account';

export interface ContactReply {
  id: number;
  replyText: string;
  replyFile: string;
  replyTime: string;
  account?: Account;
}
