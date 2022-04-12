import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  access(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.router.navigate(['/home']);
    }
  }

  newUser(event: Event){
    event.preventDefault();
    this.router.navigate(['/login/new-user']);
  }

}
