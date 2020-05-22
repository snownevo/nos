import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){
    }

    findAll(): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`); /*Lista*/
    }

    findPage(page: number = 0, linesPerPage: number = 24) : Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias/page?page=${page}&linesPerPage=${linesPerPage}`);
    }

    getImageFromBucket(id: string): Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cat${id}.jpg`;
        return this.http.get(url, { responseType: 'blob' });
    }

}