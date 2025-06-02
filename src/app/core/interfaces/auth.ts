export interface loginUserData {
  username: string;
  password: string;
}

export interface loginApiRes {
  refresh: string;
  access: string;
}

export interface tokenData {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  user_role: string;
}
