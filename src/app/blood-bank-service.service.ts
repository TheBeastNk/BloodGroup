import { Injectable } from '@angular/core';
import { BloodBankModel } from './bloodBank.interface';

@Injectable({
  providedIn: 'root'
})
export class BloodBankServiceService {
  bloodGroups: BloodBankModel[] = [];
  constructor() { }

  initializedData(): BloodBankModel[] {
    this.bloodGroups.push({id: 0, groupName: 'A+', count: 0});
    this.bloodGroups.push({id: 1, groupName: 'B+', count: 0});
    this.bloodGroups.push({id: 2, groupName: 'O+', count: 0});
    this.bloodGroups.push({id: 3, groupName: 'AB+', count: 0});
    this.bloodGroups.push({id: 4, groupName: 'A-', count: 0});
    this.bloodGroups.push({id: 5, groupName: 'B-', count: 0});
    this.bloodGroups.push({id: 6, groupName: 'O-', count: 0});
    this.bloodGroups.push({id: 7, groupName: 'AB-', count: 0});
    return this.bloodGroups;
  }
}
