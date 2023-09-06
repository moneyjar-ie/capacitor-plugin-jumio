import { Component, OnInit } from '@angular/core';
import { JumioService } from '../jumio.service';
declare var Jumio: any;

@Component({
  selector: 'app-jumio',
  templateUrl: './jumio.page.html',
  styleUrls: ['./jumio.page.scss'],
})
export class JumioPage implements OnInit {

  apiUrlInput = '';
  authToken = '';

  constructor(
    private jumioService: JumioService,
  ) {
  }

  ngOnInit() {
  }

  setApiUrl() {
    localStorage.setItem('apiUrl', this.apiUrlInput);
  }

  get apiUrl() {
    return localStorage.getItem('apiUrl');
  }

  async start() {
    await this.jumioService.startSession();
  }

}
