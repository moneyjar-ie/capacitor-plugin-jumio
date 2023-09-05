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

    console.log('Jumio.initialize.start', token);
    const j1 = Jumio.initialize(token, 'EU');
    console.log('Jumio.initialize.end', j1);
    const j2 = Jumio.start(
      re => console.log('Jumio.start.ok', re),
      err => console.log('Jumio.start.err', err),
    );
    console.log('Jumio.start.end', j2);
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
