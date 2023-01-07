import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { QuillEditorComponent } from 'ngx-quill/public-api';
import { Level } from 'src/models';
import { EmployeeService } from 'src/services';
import { LevelService } from 'src/services/level/level.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('editor') editor: QuillEditorComponent | undefined;
  content = '<p>Rich Text Editor Example </p>';
  format = 'html';
  form: any;
  levels: Level[] = [];
  employeeForm = this.fb.group({
    id: [''],
    email: [''],
    description: ['<p>Hello,</p> <b>Manh Dep Trai !</b>'],
    status: [''],
    address: [''],
    firstName: [''],
    lastName: [''],
    levelId: ['']
  });

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['clean'],
        ['link'],
        ['source'],
      ],
      handlers: {
        source: () => {
          this.formatChange();
        },
      },
    },
  };

  constructor(private fb: FormBuilder, private levelService: LevelService, private employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.levelService.getLevelList().subscribe(levels => this.levels = levels);
  }

  formatChange() {
    this.format = this.format === 'html' ? 'text' : 'html';

    if (this.format === 'text' && this.editor) {
      const htmlText = this.form.get('editor').value;
      this.editor.quillEditor.setText(htmlText);
    } else if (this.format === 'html' && this.editor) {
      const htmlText = this.form.get('editor').value;
      this.editor.quillEditor.setText('');
      this.editor.quillEditor.pasteHTML(0, htmlText);
    }
  }
  onFocus = () => {
    console.log('On Focus');
  };
  onBlur = () => {
    console.log('Blurred');
  };
}
