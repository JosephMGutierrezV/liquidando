import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-drag-drop-file-upload',
  templateUrl: './drag-drop-file-upload.component.html',
  styleUrls: ['./drag-drop-file-upload.component.scss'],
})
export class DragDropFileUploadComponent implements OnInit, OnDestroy {
  @Output() fileUp = new EventEmitter<File>();
  private token = '';
  public subscriptions: any[] = [];

  public uploadedFiles: any[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.store.select('auth').subscribe((auth) => {
        this.token = auth.token;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSelect(event: any) {
    this.uploadedFiles = [event.files[0]];
    this.fileUp.emit(event.files[0]);
  }
  onClear(event: any) {
    this.uploadedFiles = [];
  }

  myUploader(event: any) {
    this.store.dispatch(
      actions.liquide.calculoFileLoading({ file: event.files })
    );
  }
}
