import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  cor: number;
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    teste: new FormControl({value: '', disabled: true }),
  })
  ngOnInit(): void {

  }

  SalvarInf(){
  if(this.form.valid){
    console.log(this.form.value);
    
  }

  }
}
