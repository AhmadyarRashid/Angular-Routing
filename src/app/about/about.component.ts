import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
// second option
// import { FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    age : new FormControl(''),
    stackDetails: new FormGroup({
      stack: new FormControl(''),
      experience : new FormControl('')
    }),
    address: new FormGroup({
      country : new FormControl(''),
      city : new FormControl('')
    })
  });

  // second option
  // bioSection1 = this.fb.group({
  //   firstName: [''],
  //   lastName: [''],
  //   age: [''],
  //   stackDetails: this.fb.group({
  //     stack: [''],
  //     experience: ['']
  //   }),
  //   address: this.fb.group({
  //       country: [''],
  //       city: ['']
  //   })
  // });

  // for second options
  constructor(
    // private fb: FormBuilder
    ) { }

  ngOnInit() {
  }

  callingFunction() {
  //  event.preventDefault();
    console.log(this.bioSection.value);
   }
}
