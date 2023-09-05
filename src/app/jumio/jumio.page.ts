import { Component, OnInit } from '@angular/core';

declare var Jumio: {
  initialize: (token: string | undefined, datacenter: 'US' | 'EU' | 'SG') => any;
  start: (
    successCallback: (re: any) => any,
    errorCallback: (err: any) => any
  ) => any;
};

@Component({
  selector: 'app-jumio',
  templateUrl: './jumio.page.html',
  styleUrls: ['./jumio.page.scss'],
})
export class JumioPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  async startSession() {
    const token = 'sssfdggfdgh';

    console.log('Jumio.initialize.start', token);
    const j1 = Jumio.initialize(token, 'EU');
    console.log('Jumio.initialize.end', j1);
    const j2 = Jumio.start(
      re => console.log('Jumio.start.ok', re),
      err => console.log('Jumio.start.err', err),
    );
    console.log('Jumio.start.end', j2);
  }

}
