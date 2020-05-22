import { EstabelecimentoDTO } from './../../models/estabelecimento.dto';
import { CidadeDTO } from './../../models/cidade.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class EstabelecimentoService{

    constructor(public http: HttpClient){

    }

    // tslint:disable-next-line: variable-name
    findAll(cidade_id: CidadeDTO): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/estabelecimentos/${cidade_id}`);
    }

    find(id: string): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/estabelecimentos/${id}`);
    }

    insert(obj: EstabelecimentoDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/estabelecimentos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    update(obj: EstabelecimentoDTO, id: string){
        return this.http.put(
            `${API_CONFIG.baseUrl}/estabelecimentos/${id}`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    delete(id: string){
        return this.http.delete(`${API_CONFIG.baseUrl}/estabelecimentos/${id}`);
    }


/*
    upLoadPicture(picture){
    let picutreBlob = this.imageUtilService.dataUriToBlob(picture);
    let formDate : FormData = new FormData();
    formDate.set('file', picutreBlob, 'file.png');
    return this.http.post(
        `${API_CONFIG.baseUrl}/usuarios/picture`,
        formDate,
        {
            observe: 'response',
            responseType: 'text'
        }
    );
    }
*/

}