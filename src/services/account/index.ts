import { UsersApi } from 'api';
import { AuthService } from 'services';

const DUMMY_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAc3Rlc3QuY29tIiwiZXhwIjoxNTkwNDIyMTk0Njg5LCJpYXQiOjE1MTYyMzkwMjJ9.uTHUr3uoVW5liyHtam5to6z_wAlGlzs22Gn8kz8MOZ0';

class AccountService {
  apiUrl: string;

  constructor() {
    this.apiUrl = `${process.env.REACT_APP_API_URL}/users`;
  }

  get = () => {
    return UsersApi.get(this.apiUrl, AuthService.token);
  };

  enroll = (email: string, study: string) => {
    return UsersApi.enroll(this.apiUrl, { email, additionalInfo: { study } });
  };

  // TODO: Update once the actual endpoints are ready
  login = (email: string, password: string) => {
    return new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: DUMMY_TOKEN,
        });
      }, 500);
    });
  };

  // TODO: Update once the actual endpoints are ready
  register = (email: string, password: string, study: string) => {
    return new Promise<{ token: string }>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          token: DUMMY_TOKEN,
        });
      }, 500);
    });
  };
}

export default new AccountService();
