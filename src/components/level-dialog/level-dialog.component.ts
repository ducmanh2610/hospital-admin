import { Component, DoCheck, Inject, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from 'src/models';

@Component({
  selector: 'app-level-dialog',
  templateUrl: './level-dialog.component.html',
  styleUrls: ['./level-dialog.component.css']
})
export class LevelDialogComponent {
  status: boolean | undefined;
  levelForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Level, public dialogRef: MatDialogRef<LevelDialogComponent>) {
    this.status = this.data.status;
    this.levelForm = new FormGroup({
      name: new FormControl(data.name, Validators.required),
      description: new FormControl(data.description),
      status: new FormControl(this.data.status)
    });
  }
}
