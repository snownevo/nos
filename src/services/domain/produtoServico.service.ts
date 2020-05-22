import { UsuarioDTO } from 'src/models/usuario.dto';
import { ProdutoServicoDTO } from './../../models/produtoServico.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class ProdutoService{
    constructor(public http: HttpClient){

    }

findById(estabelecimentos_id: string){
    return this.http.get<ProdutoServicoDTO>(`${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimentos_id}/produtoservicos`);
}

findByCategoria(estabelecimento_id: string, produtoServicos_id: string, page: number=0, linesPerPage: number =24){
    return this.http.get(`${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento_id}/produtoservicos/${produtoServicos_id}&page=${page}&linesPerPage=${linesPerPage}`);

}

insert(obj: ProdutoServicoDTO, estabelecimento_id: string){
    return this.http.post(
        `${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento_id}/produtoservicos`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
}

update(obj: ProdutoServicoDTO, id: string, estabelecimento_id: string, produtoServicos_id: string){
    return this.http.put(
        `${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento_id}/produtoservicos/${produtoServicos_id}`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
}

delete(estabelecimento_id: string, produtoServicos_id: string){
    return this.http.delete(`${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento_id}/produtoservicos/${produtoServicos_id}`);
}



}