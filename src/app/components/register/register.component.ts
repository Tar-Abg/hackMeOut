import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {subscribeOn, Subscription} from "rxjs";
import {HttpServiceService} from "../../services/http-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = null as unknown as FormGroup;
  subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private service: HttpServiceService
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.registerForm.valid){
      this.subscriptions.add(
        this.service.register(this.registerForm.value).subscribe(response => {
          console.log(response);
        })
      )
    }
  }


}
