import { MensagemComponent } from './mensagem/mensagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: TelaLoginComponent },
  {path: "cadastro", component: CadastroComponent },
  {path: "mensagem", component: MensagemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
