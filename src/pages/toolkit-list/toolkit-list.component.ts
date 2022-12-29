import { Component, OnInit } from '@angular/core';
import { Toolkit } from 'src/models/toolkit';
import { ToolkitType } from 'src/models/toolkit-type';
import { ToolkitService } from 'src/services';
@Component({
  selector: 'app-toolkit-list',
  templateUrl: './toolkit-list.component.html',
  styleUrls: ['./toolkit-list.component.css']
})
export class ToolkitListComponent implements OnInit {
  toolkitList: Toolkit[] = [];
  toolkitTypeList: ToolkitType[] = [];

  constructor(private toolkitService: ToolkitService) { }

  ngOnInit(): void {
    this.getToolkitType();
  }

  getToolkitType(): void {
    this.toolkitService.getToolkitTypes().subscribe(toolkitTypeList => this.toolkitTypeList = toolkitTypeList);
  }

}
