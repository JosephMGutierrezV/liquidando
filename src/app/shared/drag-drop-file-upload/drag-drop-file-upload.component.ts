import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-file-upload',
  templateUrl: './drag-drop-file-upload.component.html',
  styleUrls: ['./drag-drop-file-upload.component.scss'],
})
export class DragDropFileUploadComponent implements OnInit {
  public uploadedFiles: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
