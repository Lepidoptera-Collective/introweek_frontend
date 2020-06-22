import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

export interface DecodedToken {
  readonly email: string;
  readonly exp: number;
}

export const TOKEN_STORAGE_KEY = 'introweek.authToken';

class AuthService {
  get expiresAt() {
    if (!this.token) {
      return new Date(0);
    }

    const decodedToken: DecodedToken = jwtDecode(this.token);
    return new Date(decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }

  get token() {
    return Cookie.get(TOKEN_STORAGE_KEY) || '';
  }

  setToken(token: string) {
    Cookie.set(TOKEN_STORAGE_KEY, token);
  }

  removeToken() {
    Cookie.remove(TOKEN_STORAGE_KEY);
  }
}

export default new AuthService();
