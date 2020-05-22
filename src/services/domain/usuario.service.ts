import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // HttpHeaders
import { Observable } from "rxjs";
import { API_CONFIG } from 'src/config/api.config';/*
import { StorageService } from "../storage.services";
import { ImageUtilService } from "../image-util.service";*/
import { UsuarioDTO } from 'src/models/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(public http: HttpClient/*, 
        public storage: StorageService, // criar
        public imageUtilService: ImageUtilService*/) { // criar
    }
   
    findByEmail(email: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/usuarios/email?value=${email}`);
    }
    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/usuarios/${id}`);
    }
    getImageFromBucket(id: string): Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/up${id}.jpg`;
        return this.http.get(url, { responseType: 'blob' });
    }

    insert(obj: UsuarioDTO){ 
        return this.http.post(
            `${API_CONFIG.baseUrl}/usuarios`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
   
    update(obj: UsuarioDTO, id: string){
        return this.http.put(
         `${API_CONFIG.baseUrl}/usuarios/${id}`,
         obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
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
