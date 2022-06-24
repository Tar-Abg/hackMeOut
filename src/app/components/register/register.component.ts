import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {subscribeOn, Subscription} from "rxjs";
import {HttpServiceService} from "../../services/http-service.service";
import {Router} from "@angular/router";

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
    private service: HttpServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.registerForm.valid){
      this.subscriptions.add(
        this.service.login().subscribe(response => {
          this.router.navigate(['home']).then(r => r);
        })
      )
    }
  }


}
