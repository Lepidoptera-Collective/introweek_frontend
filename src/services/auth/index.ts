import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

export interface DecodedToken {
  readonly email: string;
  readonly exp: number;
}

export const TOKEN_STORAGE_KEY = 'introweek.authToken';

class AuthService {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    this.decodedToken = { email: '', exp: 0 };

    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }

  static storeToken(token: string) {
    Cookie.set(TOKEN_STORAGE_KEY, token);
  }

  static removeToken() {
    Cookie.remove(TOKEN_STORAGE_KEY);
  }
}

export default AuthService;
