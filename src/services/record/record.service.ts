import { Injectable } from '@angular/core';
import { Record } from 'src/models';

const RECORD_DATA: Record[] = [
  {
    recordId: "REC001", title: "Appointment 01", dateImported: new Date(),
    dateModified: new Date(),
    status: true,
    dieasesDescription: "Lorem ipsum",
    patient: {

    },
  }
]

@Injectable({
  providedIn: 'root'
})

export class RecordService {

  constructor() { }
}
