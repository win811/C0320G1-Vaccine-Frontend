export class JwtResponse {
  jwttoken: string;
  accountId: string;
  name: string;
  accountName: string;
  avatar: string;
  authorities: Authority[];
}
export interface Authority {
  authority: string;
}
