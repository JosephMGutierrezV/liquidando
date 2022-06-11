import { TestBed } from '@angular/core/testing';

import { AttachmentsFilesService } from './attachments-files.service';

describe('AttachmentsFilesService', () => {
  let service: AttachmentsFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttachmentsFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
