import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommissioningDateAddComponent } from '../commissioning-date-add/commissioning-date-add.component';
import { CommissioningDateRow } from 'src/app/object-tp/object-tp-model';
import { RequestTPStoreService } from '../request-tp-store.service';

@Component({
  selector: 'lk-request-tp-add',
  templateUrl: './request-tp-add.component.html',
  styleUrls: ['./request-tp-add.component.css'],
  providers: [RequestTPStoreService]
})
export class RequestTpAddComponent implements OnInit {
  formGroup: FormGroup;
  
  displayedColumns: string[] = [
    'id',
    'designTime',
    'commissioningDate',
    'connectedPower',
    'accountingPointCount',
    'voltageLevel',
    'reliabilityCategory'];

  constructor(
    private _store : RequestTPStoreService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog) { }

  get commissioningDatesControlValue(): [] {
    return (this.objectFormGroup.controls['commissioningDates'] as FormArray).value;
  }

  get objectFormGroup(): FormGroup {
    return this.formGroup.controls['object'] as FormGroup;
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      object: this._formBuilder.group({
        description: [],
        location: [],
        cadastralNumObj: [],
        cadastralNumArea: [],
        locatedInBuilding: [],
        commissioningDates: this._formBuilder.array([]),
        currentPower: [],
        reliabilityCategory: [],
        maxPower: []
      })
    });
  }

  addCommissioningDate(): void {
    const dialogRef = this.dialog.open(CommissioningDateAddComponent);

    dialogRef.afterClosed().subscribe(result => {      
      let commissioningDatesArray = this.objectFormGroup.controls['commissioningDates'] as FormArray;
      let commissioningDateGroupRow = this.commissioningDateGroupRow();
      commissioningDateGroupRow.setValue(result as CommissioningDateRow);
      commissioningDatesArray.push(commissioningDateGroupRow);
    });
  }

  commissioningDateGroupRow(): FormGroup {
    return this._formBuilder.group({
      id: [],
      designTime: [],
      commissioningDate: [],
      connectedPower: [],
      accountingPointCount: [],
      voltageLevel: [],
      reliabilityCategory: []
    })
  }

  submit():void {
    console.log('submit');
  }
}
