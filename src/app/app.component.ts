import { Component } from '@angular/core';
import { LocalService } from 'src/services/local-storage/local.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-admin';

  constructor(private localService: LocalService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.hasOwnProperty('exp')) {
      const expTime = this.localService.getData('exp');
      if (moment(new Date()).unix() > parseInt(expTime)) {
        this.localService.clearData();
      }
      this.router.navigate(['/auth/login']);
    }
  }
}
