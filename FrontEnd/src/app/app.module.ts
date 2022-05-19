import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './login/tela-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeaderComponent } from './header/header.component';
import { MensagemComponent } from './lista-mensagem/mensagem.component';
import { CadastrarMensagemComponent } from './cadastrar-mensagem/cadastrar-mensagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
      TelaLoginComponent,
      CadastroComponent,
      MensagemComponent,
      HeaderComponent,
      CadastrarMensagemComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
