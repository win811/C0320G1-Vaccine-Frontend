export class JwtResponse {
  jwttoken: string;
  accountId: number;
  name: string;
  accountName: string;
  avatar: string;
  authorities: Authority[];
}
export interface Authority {
  authority: string;
}
