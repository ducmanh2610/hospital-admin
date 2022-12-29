import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Toolkit } from 'src/models/toolkit';
import { ToolkitType } from 'src/models/toolkit-type';

const TOOL_TYPE_DATA: ToolkitType[] = [
  {
    toolTypeId: 'TT001',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  },
  {
    toolTypeId: 'TT002',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
  , {
    toolTypeId: 'TT003',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
  , {
    toolTypeId: 'TT004',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
  , {
    toolTypeId: 'TT005',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
  , {
    toolTypeId: 'TT006',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
  , {
    toolTypeId: 'TT007',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
  , {
    toolTypeId: 'TT008',
    name: 'Medical Toolkit',
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    isAvailable: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, voluptatum.'
  }
]

const TOOLKIT_DATA: Toolkit[] = [
  {
    toolId: 'T001', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT001'
  },
  {
    toolId: 'T002', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT002'
  },
  {
    toolId: 'T003', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT003'
  },
  {
    toolId: 'T004', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT004'
  },
  {
    toolId: 'T005', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT005'
  },
  {
    toolId: 'T006', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT001'
  },
  {
    toolId: 'T007', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT002'
  },
  {
    toolId: 'T008', name: 'Medical Knives', dateImported: new Date(), quantity: 4,
    imageURL: 'https://media.istockphoto.com/id/1167889129/vector/scalpel-with-a-removable-blade-manual-surgical-instrument-medicine-and-health-isolated.jpg?s=612x612&w=0&k=20&c=EHQbTWlVJ_V0ht5hvLaju-N0VHHWdxyZx6PsVjEHMtM=',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsum!',
    isAvailable: true,
    toolTypeId: 'TT003'
  }
]

@Injectable({
  providedIn: 'root'
})
export class ToolkitService {

  constructor() { }

  public getToolkits(): Observable<Toolkit[]> {
    return of(TOOLKIT_DATA);
  }

  public getToolkitById(toolId: string): Observable<Toolkit> {
    const toolkit = TOOLKIT_DATA.find(t => t.toolId === toolId)!;
    return of(toolkit);
  }

  public getToolkitListByTypeId(toolTypeId: string): Observable<Toolkit[]> {
    console.log(toolTypeId);
    const toolkit = TOOLKIT_DATA.filter(t => t.toolTypeId === toolTypeId)!;
    return of(toolkit);
  }

  public getToolkitTypes(): Observable<ToolkitType[]> {
    return of(TOOL_TYPE_DATA);
  }

  public getToolkitTypeById(toolTypeId: string): Observable<ToolkitType> {
    const toolkitType = TOOL_TYPE_DATA.find(t => t.toolTypeId === toolTypeId)!;
    return of(toolkitType);
  }
}
