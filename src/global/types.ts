// auth
export interface RegisterRequest {
  email: string;
  password: string;
  firstname: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface IAuthPayloadAction {
  token: string;
}
