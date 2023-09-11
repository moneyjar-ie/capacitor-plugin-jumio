import { Component, OnInit } from '@angular/core';
import { JumioService } from '../jumio.service';
import { takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-jumio',
  templateUrl: './jumio.page.html',
  styleUrls: ['./jumio.page.scss'],
})
export class JumioPage implements OnInit {

  apiUrlInput = '';

  constructor(
    private jumioService: JumioService,
  ) {
  }

  ngOnInit() {
    const enc = "[{\"credentialId\":\"43068a74-400a-4fe5-9fde-4e9b8d4cb462\",\"credentialCategory\":\"ID\"}, {\"credentialId\":\"57bfe9fc-7ccc-4480-bcdc-f5c803d52864\",\"credentialCategory\":\"FACE\",\"passed\":\"true\"}]";
    const decrypted = JSON.parse(enc);
    // console.log('decrypted', decrypted);

    console.time('timer');
    let token: string | null;
    timer(0, 2000)
      .pipe(
        takeWhile(() => !token)
      )
      .subscribe(async () => {
        const rand = Math.random();
        token = rand > .7 ? rand.toString() : null;
        console.timeLog('timer', rand, token);
        if (token) {
          console.timeEnd('timer');
        }
      })

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
