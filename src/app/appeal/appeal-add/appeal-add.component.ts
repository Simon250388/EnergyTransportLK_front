import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lk-appeal-add',
  templateUrl: './appeal-add.component.html',
  styleUrls: ['./appeal-add.component.css']
})
export class AppealAddComponent implements OnInit {
  formGroup : FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });    
  }

}
