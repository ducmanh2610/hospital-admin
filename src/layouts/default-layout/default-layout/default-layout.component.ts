import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
})
export class DefaultLayoutComponent implements OnInit {
  sidebarStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(sidebarStatus: boolean) {
    this.sidebarStatus = sidebarStatus;
  }

}
