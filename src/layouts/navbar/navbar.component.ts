import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/services/local-storage/local.service';
import { Output, EventEmitter } from '@angular/core';
import { AuthenticateService } from 'src/services/authenticate/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string;
  constructor(private localService: LocalService, private authService: AuthenticateService) { }
  @Output() sidebarStatus = new EventEmitter<boolean>();
  status: boolean = false;

  ngOnInit(): void {
    this.username = this.localService.getData('username');
  }

  public toggleSidebar(): void {
    this.status = !this.status;
    this.sidebarStatus.emit(this.status);
  }

  public logout(): void {
    this.authService.logout();
  }
}
