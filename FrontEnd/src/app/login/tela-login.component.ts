import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
})
export class TelaLoginComponent implements OnInit {
  loginFormGroup: FormGroup

  /*para tipar o objeto
  FormGroup
  "strictPropertyInitialization": false
  /*/


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void{

    this.loginFormGroup = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
    if(this.loginFormGroup.valid){
      console.log(this.loginFormGroup.value)
    }

  }

  iniciarForulario(){
    if(this.loginFormGroup.valid)
    console.log(this.loginFormGroup.value);
  }
}
