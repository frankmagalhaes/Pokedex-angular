import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
}) 
export class PokeApiService {

    private url: string = environment.api;
    constructor(
        private http: HttpClient
    ) { }

    get apiListAllPokemons():Observable<any>{
        return this.http.get<any>(this.url).pipe(
            tap( res => res),
            tap( res => {
                res.results.map((resPokemons: any) => {

                    this.apiGetPokemons(resPokemons.url).subscribe(
                        res => resPokemons.status = res
                    )
                })
            })
        )
    }
    public apiGetPokemons( url: string): Observable<any>{
       return this.http.get<any>(url).pipe(
            map(
                res => res
            )
        )
    }

    
}