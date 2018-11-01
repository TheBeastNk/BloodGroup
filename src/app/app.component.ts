import { Component, OnInit } from '@angular/core';
import { BloodBankModel } from './bloodBank.interface';
import { BloodBankServiceService } from './blood-bank-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bloodContainerList: BloodBankModel[] = [];
  selectedGroup: string;
  requiredGroup: string;
  count: number;
  requiredCount: number;
  selecetedIndex: number;
  selectedDonorList: string[];
  greenColoredBox: boolean[] = [] as boolean[];

  constructor(private bloodBankSrvice: BloodBankServiceService) {}

  ngOnInit() {
    this.bloodContainerList = this.bloodBankSrvice.initializedData();
  }

  onChangeGroup(index: number) {
    this.selecetedIndex = index;
  }

  onselectRequiredCount(value) {
    this.requiredGroup = value;
    this.getDonorList(this.requiredGroup);
  }

  onSubmitCount(index: number) {
    this.bloodContainerList[this.selecetedIndex].count = this.count;
  }

  getDonorList(bloodGroup: string) {
      if (bloodGroup === 'A+' ) {
        this.selectedDonorList = ['A+', 'A-', 'O+', 'O-'];
      } else if (bloodGroup === 'A-' ) {
        this.selectedDonorList = ['A-', 'O-'];
      }  else if (bloodGroup === 'B+' ) {
        this.selectedDonorList = ['B+', 'B-', 'O+', 'O-'];
      }  else if (bloodGroup === 'B-' ) {
        this.selectedDonorList = ['B-', 'O-'];
      }  else if (bloodGroup === 'O+' ) {
        this.selectedDonorList = ['O+', 'O-'];
      }  else if (bloodGroup === 'O-' ) {
        this.selectedDonorList = ['O-'];
      }  else if (bloodGroup === 'AB+' ) {
        this.selectedDonorList = ['B+', 'B-', 'O+', 'O-', 'A+', 'A-', 'AB+', 'AB-'];
      }   else if (bloodGroup === 'AB-' ) {
        this.selectedDonorList = ['AB-', 'B-', 'A-', 'O-'];
      }
  }

  requiredGroups(name) {
      let returnedValue;
      returnedValue = this.selectedDonorList.find((list) => {
          return name === list;
      });
      return returnedValue !== undefined ? true : false;
  }

  checkAvailability() {
    let returnedValue;
    let greenedIndex: number;
    this.selectedDonorList.forEach((item) => {
      returnedValue = this.bloodContainerList.find((list, index) => {
          greenedIndex = index;
         return list.groupName === item;
      });
      if (returnedValue !== undefined && returnedValue.count >= this.requiredCount ) {
          this.greenColoredBox[greenedIndex] = true;

      } else {
          this.greenColoredBox[greenedIndex] = false;
      }
    });
  }

}

