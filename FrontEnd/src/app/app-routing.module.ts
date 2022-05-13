
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login.component';
import { MensagemComponent } from './lista-mensagem/mensagem.component';
import { CadastrarMensagemComponent } from './cadastrar-mensagem/cadastrar-mensagem.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: TelaLoginComponent },
  {path: "cadastro", component: CadastroComponent },
  {path: "mensagem", component: MensagemComponent },
  {path: "cadastro-mensagem", component: CadastrarMensagemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
