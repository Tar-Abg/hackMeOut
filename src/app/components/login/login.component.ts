import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpServiceService} from "../../services/http-service.service";
import {Subscription} from "rxjs";
import LoginForm from "../../models/common-interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null as unknown as FormGroup;
  subscriptions = new Subscription();
  loginData: LoginForm = null as unknown as LoginForm;

  constructor(
    private formBuilder: FormBuilder,
    private service: HttpServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void{
    if(this.loginForm.valid){
      this.loginData = this.loginForm.value;
      this.subscriptions.add(
        this.service.login().subscribe(response => {
          if(this.loginData.email === response.email && this.loginData.password === response.password){
            this.router.navigate(['home']).then(r => r);
          }
        })
      )
    }
  }

}
