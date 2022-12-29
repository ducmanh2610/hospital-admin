import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit {
  selected = 'option2';
  
  constructor() { }

  ngOnInit(): void {
  }

}
