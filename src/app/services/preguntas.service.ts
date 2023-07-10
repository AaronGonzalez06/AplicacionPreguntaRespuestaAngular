import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PreguntasService {
    constructor(
        public _http: HttpClient
    ){
    }

    show(categoria:string, dificultad:string):Observable<any>{
            let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
            return this._http.get('https://opentdb.com/api.php?amount=10&category='+categoria+'&difficulty='+dificultad+'&type=multiple', { headers: headers });    
    }
}
