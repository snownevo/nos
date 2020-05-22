import { UsuarioDTO } from 'src/models/usuario.dto';
import { UsuarioService } from './../../../services/domain/usuario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  nome: string = 'teste';
  sliderOpts={
    zoom:false,
    slidesPerView:4,
    centeredSlides:false,
    spaceBeetween:10
  };
  
  usuario: UsuarioDTO;

  constructor(public usuarioService: UsuarioService){
    usuarioService.findById('1').subscribe(
      response => {
        this.usuario = response as UsuarioDTO;
        this.nome = this.usuario.nome;
      },
      error => {
        this.nome = 'TESTE';
      }
    );
    
  }

  ngOnInit() {
    
  }

}
