import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

@Component({
  selector: 'lk-commissioning-date-add',
  templateUrl: './commissioning-date-add.component.html',
  styleUrls: ['./commissioning-date-add.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class CommissioningDateAddComponent implements OnInit {

  formGroup: FormGroup

  constructor(private formbuilder: FormBuilder) {
    this.formGroup = this.formbuilder.group({
      id: [],
      designTime: [],
      commissioningDate: [],
      connectedPower: [],
      accountingPointCount: [],
      voltageLevel: [],
      reliabilityCategory: []
    })
  }

  ngOnInit(): void {
    
  }



}
