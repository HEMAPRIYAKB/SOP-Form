import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private toastr: ToastrService, public service:HttpService) {}
  
  display: FormControl = new FormControl("", Validators.required);
  submitted = false;

  emailFormControl = new FormControl('', [
    Validators.required, Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required, Validators.pattern('[a-zA-Z ]*')
  ]);
  ageFormControl = new FormControl('', [
    Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)
  ]);
  selectFormControl = new FormControl('', Validators.required);
  institutionFormControl = new FormControl('', Validators.required);
  studyFormControl = new FormControl('', Validators.required);
  expFormControl = new FormControl('', Validators.required);
  admitFormControl = new FormControl('', Validators.required);
  programFormControl = new FormControl('', Validators.required);
  countryFormControl = new FormControl('', Validators.required);
  goalsFormControl = new FormControl('', Validators.required);
  listeningFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  readingFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  speakingFormControl = new FormControl('', [Validators.required, Validators.min(1)]);
  writingFormControl = new FormControl('', [Validators.required, Validators.min(1)]);

  firstPay: string='';
  pays: string[] = ['Yes', 'No'];
  payFormControl = new FormControl('', Validators.required);
  payFormCont=false

  feesFormControl = new FormControl('', Validators.required);

  firstGic: string='';
  gics: string[] = ['Yes', 'No'];
  gicFormControl = new FormControl('', Validators.required);
  gicFormCont=false

  gicpayFormControl = new FormControl('', Validators.required);

  pay(){
    if(this.payFormControl.valid){
      this.payFormCont = false
    }
  }

  gic(){
    if(this.gicFormControl.valid){
      this.gicFormCont = false
    }
  }

  submitData() {
    this.submitted=true;
    if(this.payFormControl.invalid){
      this.payFormCont= true
    }
    if(this.payFormControl.valid){
      this.payFormCont = false
    }
    if(this.gicFormControl.invalid){
      this.gicFormCont= true
    }
    if(this.gicFormControl.valid){
      this.gicFormCont = false
    }
    if(this.emailFormControl.invalid || this.nameFormControl.invalid || this.ageFormControl.invalid 
      || this.selectFormControl.invalid || this.institutionFormControl.invalid || this.studyFormControl.invalid 
      || this.expFormControl.invalid || this.admitFormControl.invalid || this.programFormControl.invalid
      || this.countryFormControl.invalid || this.goalsFormControl.invalid || this.listeningFormControl.invalid
      || this.readingFormControl.invalid || this.speakingFormControl.invalid || this.writingFormControl.invalid
      || this.payFormControl.invalid || this.feesFormControl.invalid || this.gicFormControl.invalid || this.gicpayFormControl.invalid){
      this.toastr.error("Fill all the required fields correctly");
      return
    }

    let dataset = {
      email: this.emailFormControl.value,
      fullname: this.nameFormControl.value,
      age: this.ageFormControl.value,
      education: this.selectFormControl.value,
      institution: this.institutionFormControl.value,
      study: this.studyFormControl.value,
      experience: this.expFormControl.value,
      admit: this.admitFormControl.value,
      program: this.programFormControl.value,
      country: this.countryFormControl.value,
      goals: this.goalsFormControl.value,
      listening: this.listeningFormControl.value,
      reading: this.readingFormControl.value,
      speaking: this.speakingFormControl.value,
      writing: this.writingFormControl.value,      
      payform: this.payFormControl.value,
      feesform: this.feesFormControl.value,
      gicform: this.gicFormControl.value,
      gicpayform: this.gicpayFormControl.value,
    }

    this.service.userReg(dataset);
    console.log(dataset,"hi")
  }
}