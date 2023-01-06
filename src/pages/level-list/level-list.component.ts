import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, LevelDialogComponent } from 'src/components';
import { LevelService } from 'src/services/level/level.service';
import { Level } from 'src/models';

export interface DialogData {
  title?: string;
  message?: string;
  id?: string;
}

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class LevelListComponent implements OnInit {
  dataSource: any;
  columnsToDisplay = ['position', 'name', 'dateImported', 'dateModified', 'action'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Level | null;

  constructor(public dialog: MatDialog, private levelService: LevelService) { }


  ngOnInit(): void {
    this.levelService.getLevelList().subscribe(data => this.dataSource = data);
  }

  public openDialog(): void {
    let data: Level = {
      name: '',
      status: false,
      description: ''
    };

    const dialogRef = this.dialog.open(LevelDialogComponent, {
      data: data
    });
    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      if (result != false) {
        this.levelService.saveNewLevel(result).subscribe(response => console.log(response));
      }
    });
  }

  public openConfirmDialog(enterAnimationDuration: string, exitAnimationDuration: string, name: string, id: string): void {
    let title = 'Confirm Delete';
    let message = `Delete ${name} ?`;
    let levelId = id;
    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: {
          title: title,
          message: message,
          id: levelId
        }
      },
    );
    confirmDialogRef.disableClose = true;

    confirmDialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != false) {
        this.levelService.deleteLevelById(result).subscribe(response => console.log(response));
      }
    })
  }
}
