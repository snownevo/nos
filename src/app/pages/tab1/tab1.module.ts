import { HttpClient, HttpHandler } from '@angular/common/http';
import { UsuarioService } from './../../../services/domain/usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers: [
    HttpClient,
    HttpHandler,
    UsuarioService
  ]
})
export class Tab1PageModule {}
