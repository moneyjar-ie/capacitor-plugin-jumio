import { Component, OnInit } from '@angular/core';
declare var Jumio: any;

@Component({
  selector: 'app-jumio',
  templateUrl: './jumio.page.html',
  styleUrls: ['./jumio.page.scss'],
})
export class JumioPage implements OnInit {

  authToken: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  init() {
    console.log('Jumio.initStart');
    Jumio.initialize(this.authToken, 'EU');
    console.log('Jumio.initialized');
    Jumio.start(
      (re: any) => console.log('Jumio.start.ok', re),
      (err: any) => console.log('Jumio.start.err', err),
    );
  }

}
