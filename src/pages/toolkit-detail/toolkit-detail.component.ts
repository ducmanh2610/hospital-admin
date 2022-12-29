import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Toolkit } from 'src/models/toolkit';
import { ToolkitService } from 'src/services';

@Component({
  selector: 'app-toolkit-detail',
  templateUrl: './toolkit-detail.component.html',
  styleUrls: ['./toolkit-detail.component.css']
})
export class ToolkitDetailComponent implements OnInit {
  toolkitList: Toolkit[] = [];
  toolTypeId: string | undefined;
  value = 'Clear';
  toolkitTypes: string[] = ['Medical Tool', 'Machine Tool', 'X-Rays', 'Fetoscope', 'Surgical'];
  toolkitInfoTypes: string[] = ['Date Imported', 'Available', 'Quantities'];
  constructor(private route: ActivatedRoute, private toolkitService: ToolkitService) { }

  ngOnInit(): void {
    const toolTypeId = String(this.route.snapshot.paramMap.get('toolTypeId'));
    this.getAllToolkitList(toolTypeId);
  }

  getAllToolkitList(toolTypeId: string): void {
    this.toolkitService.getToolkitListByTypeId(toolTypeId).subscribe(toolkit => this.toolkitList = toolkit);
  }
}
