import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpServiceService} from "../../services/http-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null as unknown as FormGroup;
  subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private service: HttpServiceService
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
      this.subscriptions.add(
        this.service.login(this.loginForm.value).subscribe(response => {
          console.log(response);
        })
      )
    }
  }

}
