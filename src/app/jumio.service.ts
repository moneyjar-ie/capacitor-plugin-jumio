import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

declare var Jumio: {
  initialize: (token: string | undefined, datacenter: 'US' | 'EU' | 'SG') => any;
  start: (
    successCallback: (re: any) => any,
    errorCallback: (err: any) => any
  ) => any;
};


@Injectable({providedIn: 'root'})
export class JumioService {

  constructor(
    private http: HttpClient,
  ) {
  }

  async startSession() {
    const token = await this.getToken();

    try {
      console.log('Jumio.initialize', token, 'EU');
      Jumio.initialize(token, 'EU');

      console.log('Jumio.start');
      Jumio.start(
        async (re: {
          accountId: string, // e.g. "72e1faf6-045e-4a0b-b25c-3ce32c7074eb"
          credentials: string, // e.g. "[{\"credentialId\":\"43068a74-400a-4fe5-9fde-4e9b8d4cb462\",\"credentialCategory\":\"ID\"}, {\"credentialId\":\"57bfe9fc-7ccc-4480-bcdc-f5c803d52864\",\"credentialCategory\":\"FACE\",\"passed\":\"true\"}]"
        }) => {
          console.log('Jumio.start.ok', re);
          // await this.completeSession();
        },
        err => console.log('Jumio.start.err', err),
      );

    } catch (e) {
      console.log('Jumio.ERROR', e);
    }
  }

  getToken() {
    return this.http.post<any>(`${localStorage.getItem('apiUrl')}/jumio`, null)
      .pipe(map(re => re.data?.token as string))
      .toPromise();
  }

  completeSession() {
    return this.http.post<void>(`${localStorage.getItem('apiUrl')}/users/me/verification-completed`, null)
      .toPromise();
  }

}
